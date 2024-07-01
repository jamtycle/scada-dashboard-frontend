import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import PanelConfig from "./PanelConfig";
import PanelState from "./PanelState";
import EChartsReact from "echarts-for-react";
import moment from "moment";
// import dimple from "dimple-js";
// import moment from "moment";
// import { HiXCircle } from "react-icons/hi2";

interface GraphPanelProps extends PanelConfig {
   // graphOptions: { };
}

interface GraphSerie {
   name: string;
   type: string;
   data: (number | undefined)[];
}

const GraphPanel: React.FC<GraphPanelProps> = (props: GraphPanelProps) => {
   const [state, setState] = useState<PanelState>({
      loading: true,
   });
   const [xAxis, setXAxis] = useState<string[]>([]);
   const [series, setSeries] = useState<Array<GraphSerie>>([]);

   useEffect(() => {
      d3.json(props.dataApi)
         .then((x) => {
            setState({ data: x });
         })
         .catch((e) => {
            console.error(e);
            setState({ error: e.toString(), loading: false });
         });
   }, [props.dataApi]);

   useEffect(() => {
      if (!state.data) return;

      const data = state.data as never[];
      const uniqueTimeStrings = Array.from(
         new Set(
            data.map((item: Record<string, never>) =>
               moment(item.TimeString, "DD-MM-YYYY H:mm").format("MMM-DD H"),
            ),
         ),
      );
      setXAxis(uniqueTimeStrings);
      // console.log(uniqueTimeStrings);
      // Math.round(d3.mean(v, (d: Record<string, never>) => d.VarValue)!, 2)

      const summaryData = d3.rollup(
         data,
         (v: Record<string, never>[]) =>
            Math.round(
               d3.mean(v, (d: Record<string, never>) => d.VarValue)! * 100,
            ) / 100,
         (d: Record<string, never>) =>
            moment(d.TimeString, "DD-MM-YYYY H:mm").format("MMM-DD H"),
      );
      // console.log(summaryData);
      setSeries([
         {
            name: "Intention",
            type: "line",
            data: uniqueTimeStrings.map((timeString) =>
               summaryData.get(timeString),
            ),
         },
      ]);
      // const nestedData = d3Array.nest()
      //    .key((item: Record<string, never>) => moment(item.TimeString, "DD-MM-YYYY H:mm").format("MMM-DD H"))
      //    .rollup((values: Record<string, never>[]) => d3.mean(values, (d: Record<string, never>) => d.YourDataField))
      //    .entries(data);

      // const averageByHour = nestedData.map((entry: { key: string, value: number }) => entry.value);
      // console.log(averageByHour);
   }, [state.data]);

   return (
      <div className="h-full w-full">
         <div className="flex w-full gap-4">
            <h3 className="text-lg font-medium text-white">
               Gráfica de corriente en diferentes horas
            </h3>
            {state.loading && (
               <span className="loading loading-spinner loading-md"></span>
            )}
         </div>
         <EChartsReact
            className="min-h-full min-w-full py-10"
            option={{
               tooltip: {},
               legend: {
                  top: "bottom",
                  data: ["Sales"],
               },
               xAxis: {
                  data: xAxis,
                  axisLabel: {
                     show: true,
                     interval: 0,
                     rotate: 50,
                     textStyle: {
                        color: "white",
                     },
                  }
               },
               yAxis: {},
               series,
            }}
         />
      </div>
   );
};

export default GraphPanel;

// [
//    {
//       name: "Sales",
//       type: "bar",
//       data: [5, 20, 36, 10, 10, 20],
//    },
//    {
//       name: "Intention",
//       type: "line",

//       data: [7, 18, 34, 12, 9, 22],
//    },
// ]
