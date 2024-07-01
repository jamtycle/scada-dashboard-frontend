import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import PanelConfig from "./PanelConfig";
import PanelState from "./PanelState";
import { HiXCircle } from "react-icons/hi2";
import moment from "moment";

export enum ReportType {
   Summary,
   Details,
}

interface TablePanelProps extends PanelConfig {
   reportType: ReportType;
}

let summaryCache: never[] = [];

const TablePanel: React.FC<TablePanelProps> = (props: TablePanelProps) => {
   const [state, setState] = useState<PanelState>({
      loading: true,
   });
   const [tableData, setTableData] = useState<never[]>([]);

   useEffect(() => {
      d3.json(props.dataApi)
         .then((x) => {
            const first: never = (x as never[])[0];
            const columns = Object.keys(first).filter(
               (x) =>
                  typeof first[x] !== "object" &&
                  typeof first[x] !== "function",
            );
            setState({
               data: x,
               loading: false,
               columns,
            });
         })
         .catch((e) => {
            console.error(e);
            setState({ error: e.toString(), loading: false });
         });
   }, [props.dataApi]);

   useEffect(() => {
      if (!state.data) return;

      setState((s) => ({ ...s, loading: true }));

      if (props.reportType === ReportType.Summary) {
         if (summaryCache.length > 0) {
            setTableData(summaryCache as never[]);
            setState((s) => ({ ...s, loading: false }));
            return;
         }

         const summaryData = d3.rollup(
            state.data as Record<string, never>[],
            (v: Record<string, never>[]) =>
               Math.round(
                  d3.mean(v, (d: Record<string, never>) => d.VarValue)! * 100,
               ) / 100,
            (d: Record<string, never>) =>
               moment(d.TimeString, "DD-MM-YYYY H:mm").format("MMM-DD H"),
            (d: Record<string, never>) => d.VarName,
         );

         const flatData = Array.from(summaryData.entries()).map(
            ([key, value]) => ({
               TimeString: key,
               ...Array.from(value.entries()).map(([k, v]) => ({
                  VarName: k,
                  VarValue: v,
               }))[0],
            }),
         );

         summaryCache = flatData as never[];
         setTableData(flatData as never[]);
         setState((s) => ({ ...s, loading: false }));
      } else {
         setTableData(state.data as never[]);
         setState((s) => ({ ...s, loading: false }));
      }
   }, [props.reportType, state.data]);

   const generateRow = (drow: Record<string, never>, key: number) => {
      return (
         <tr key={key}>
            {state.columns?.map((c, i) => <td key={i}>{drow[c]}</td>)}
         </tr>
      );
   };

   return (
      <div className="h-full max-h-full overflow-x-auto">
         {state.loading && (
            <div className="flex w-full items-center justify-center">
               <span className="loading loading-spinner loading-md"></span>
            </div>
         )}
         <table className="table table-pin-rows">
            <thead>
               <tr>{state.columns?.map((c, i) => <th key={i}>{c}</th>)}</tr>
            </thead>
            <tbody>
               {tableData !== undefined &&
                  state.columns !== undefined &&
                  (tableData as never[])
                     .slice(0, 50)
                     .map((r, i) => generateRow(r, i))}
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={state.columns?.length}>
                     {((state.data &&
                        (tableData as never[]).length) as number) ?? 0}{" "}
                     registros{" "}
                     {props.reportType === ReportType.Details
                        ? "| mostrando los primeros 50 registros"
                        : ""}
                  </td>
               </tr>
            </tfoot>
         </table>
         {state.error && (
            <div role="alert" className="alert alert-error">
               <HiXCircle className="h-6 w-6 shrink-0 stroke-current" />
               <span>{state.error}</span>
            </div>
         )}
      </div>
   );
};

export default TablePanel;
