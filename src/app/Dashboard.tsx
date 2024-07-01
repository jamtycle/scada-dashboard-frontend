import React, { useState } from "react";
import TablePanel, { ReportType } from "../components/TablePanel";
import GraphPanel from "../components/GraphPanel";

const Dashboard: React.FC = () => {
   const [reportType, setReportType] = useState<ReportType>(ReportType.Summary);

   function handleReportTypeChange(type: ReportType) {
      setReportType(type);
   }

   return (
      <>
         <div className="col-span-2 flex max-h-[85vh] w-full flex-col gap-4 rounded-3xl bg-base-200 px-7 py-5">
            <div className="flex items-center justify-between align-middle">
               <h3 className="text-2xl font-semibold">Reporte SCADA</h3>
               <div className="join flex">
                  <button
                     className={`btn join-item btn-sm rounded-full ${reportType === ReportType.Summary ? "btn-primary" : "btn-secondary"}`}
                     onClick={() => handleReportTypeChange(ReportType.Summary)}
                  >
                     Resumen
                  </button>
                  <button
                     className={`btn join-item btn-sm rounded-full ${reportType === ReportType.Details ? "btn-primary" : "btn-secondary"}`}
                     onClick={() => handleReportTypeChange(ReportType.Details)}
                  >
                     Detalles
                  </button>
               </div>
            </div>
            <TablePanel
               dataApi="https://scada-dashboard-backend.onrender.com?report_id=7"
               configApi=""
               title=""
               reportType={reportType}
            />
         </div>
         <div className="col-span-4 flex h-[95%] w-full flex-col gap-4 rounded-3xl bg-base-200 px-7 py-5">
            <GraphPanel
               dataApi="https://scada-dashboard-backend.onrender.com?report_id=7"
               configApi=""
               title=""
            />
         </div>
      </>
   );
};

export default Dashboard;
