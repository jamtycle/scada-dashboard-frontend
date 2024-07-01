import { HiBars3 } from "react-icons/hi2";
import React from "react";
import logo from "/ixm-logo.svg";
import { FaPlus } from "react-icons/fa";

interface LayoutProps {
   children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
   return (
      <div className="drawer min-h-screen max-h-screen max-w-full bg-base-100">
         {/* 2xl:drawer-open */}
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <main className="drawer-content">
            <div className="grid h-full max-h-screen grid-cols-1 grid-rows-[min-content] gap-y-5 overflow-y-auto">
               <header className="flex max-h-14 items-center gap-2 bg-base-200 px-5 py-5 lg:gap-4 2xl:max-h-10 2xl:px-14 2xl:py-10">
                  <label
                     htmlFor="my-drawer"
                     className="btn btn-ghost drawer-button flex-col gap-5 2xl:hidden"
                  >
                     <HiBars3 className="h-5 w-5" />
                     <img src={logo} alt="logo" className="h-2/4" />
                  </label>

                  <div className="hidden grow items-center align-middle 2xl:flex">
                     <button className="btn btn-ghost border-0 py-1 outline-none">
                        <img src={logo} alt="logo" className="h-3/4" />
                     </button>
                     <div className="flex w-full items-center justify-end gap-5 align-middle">
                        <label className="form-control w-full max-w-2xs flex-row">
                           <div className="label">
                              <span className="label-text text-base font-medium text-[#c2c8d580]">
                                 Reporte
                              </span>
                           </div>
                           <select className="select w-full max-w-2xs">
                              <option disabled>
                                 Buscar...
                              </option>
                              <option>Homer</option>
                              <option>Marge</option>
                              <option>Bart</option>
                              <option>Lisa</option>
                              <option>Maggie</option>
                           </select>
                        </label>
                        <label className="form-control w-full max-w-2xs flex-row">
                           <div className="label">
                              <span className="label-text text-base font-medium text-[#c2c8d580]">
                                 Variable
                              </span>
                           </div>
                           <select className="select w-full max-w-2xs">
                              <option>Ver todo</option>
                              <option>Homer</option>
                              <option>Marge</option>
                              <option>Bart</option>
                              <option>Lisa</option>
                              <option>Maggie</option>
                           </select>
                        </label>
                        <label className="form-control w-full max-w-xs flex-row">
                           <div className="label">
                              <span className="label-text text-base font-medium text-[#c2c8d580]">
                                 Desde
                              </span>
                           </div>
                           <input
                              className="input"
                              type="datetime-local"
                              step={3600}
                           />
                        </label>
                        <label className="form-control w-full max-w-xs flex-row">
                           <div className="label">
                              <span className="label-text text-base font-medium text-[#c2c8d580]">
                                 Hasta
                              </span>
                           </div>
                           <input
                              className="input"
                              type="datetime-local"
                              step={3600}
                           />
                        </label>
                        <label className="btn btn-primary">
                           Agregar Datos
                           <FaPlus className="h-5 w-5" />
                           <input
                              type="file"
                              className="hidden"
                              accept=".csv"
                           />
                        </label>
                     </div>
                  </div>

                  {/* <div className="bg-white">
                     <div className="flex items-center gap-2">
                        <div className="bg-base-100 h-10 w-10 rounded-full"></div>
                        <div>
                           <h1 className="text-lg font-semibold">
                              Agro Master
                           </h1>
                           <p className="text-sm text-gray-500">Dashboard</p>
                        </div>
                     </div>
                  </div> */}

                  {/* <div className="dropdown dropdown-end z-50">
                     <div
                        tabIndex={0}
                        className="avatar btn btn-circle btn-ghost"
                     >
                        <div className="w-10 rounded-full">
                        </div>
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
                     >
                        <li>
                           <Link to="profile">
                              <HiUser className="h-5 w-5" />
                              Profile
                           </Link>
                        </li>
                        <li>
                           <Link to="settings">
                              <FaCog className="h-5 w-5" />
                              Settings
                           </Link>
                        </li>
                        <li>
                           <Link to="logout" className="text-red-400">
                              <IoExit className="h-5 w-5" />
                              Logout
                           </Link>
                        </li>
                     </ul>
                  </div> */}
               </header>

               {/* auto-rows-[minmax(0,_160px)] */}
               <div className="mx-10 grid min-h-full auto-rows-auto grid-cols-6 items-center justify-center gap-x-3 gap-y-4 align-middle 2xl:gap-x-8">
                  {props.children}
               </div>
            </div>
         </main>
         <aside className="drawer-side z-10">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <nav className="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-10">
               <div className="mx-4 flex items-center justify-center gap-2 py-5 align-middle text-lg font-black">
                  <img src={logo} alt="logo" className="h-3/4" />
               </div>
               <div className="flex w-full flex-col items-center justify-end gap-5 align-middle">
                  <label className="form-control w-full max-w-2xs">
                     <div className="label">
                        <span className="label-text text-base font-medium text-[#c2c8d580]">
                           Reporte
                        </span>
                     </div>
                     <select className="select w-full max-w-2xs">
                        <option disabled>Buscar...</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                     </select>
                  </label>
                  <label className="form-control w-full max-w-2xs">
                     <div className="label">
                        <span className="label-text text-base font-medium text-[#c2c8d580]">
                           Variable
                        </span>
                     </div>
                     <select className="select w-full max-w-2xs">
                        <option>Ver todo</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                     </select>
                  </label>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text text-base font-medium text-[#c2c8d580]">
                           Desde
                        </span>
                     </div>
                     <input
                        className="input"
                        type="datetime-local"
                        step={3600}
                     />
                  </label>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text text-base font-medium text-[#c2c8d580]">
                           Hasta
                        </span>
                     </div>
                     <input
                        className="input"
                        type="datetime-local"
                        step={3600}
                     />
                  </label>
                  <label className="btn btn-primary">
                     Agregar Datos
                     <FaPlus className="h-5 w-5" />
                     <input type="file" className="hidden" accept=".csv" />
                  </label>
               </div>
               {/* <ul className="menu">
                  <li>
                     <NavLink to="dashboard" className="text-lg font-semibold">
                        <MdSpaceDashboard className="h-7 w-7" />
                        Dashboard
                     </NavLink>
                  </li>
                  <li>
                     <details>
                        <summary className="text-lg font-semibold">
                           Reportes
                        </summary>
                        <ul>
                           <li>
                              <div>
                                 <FaPlus className="h-5 w-5" />
                                 Nuevo Reporte
                              </div>
                           </li>
                        </ul>
                     </details>
                  </li>
                  <li>
                     <details>
                        <summary className="text-lg font-semibold">
                           Mantenimiento
                        </summary>
                        <ul>
                           <li>
                              <NavLink to="geoparcels">
                                 <FaDrawPolygon className="h-5 w-5" />
                                 Geocercas
                              </NavLink>
                           </li>
                           <li>
                              <NavLink to="forms">
                                 <FaClipboardList className="h-5 w-5" />
                                 Cartillas
                              </NavLink>
                           </li>
                           <li>
                              <NavLink to="schemes">
                                 <MdGradient className="h-5 w-5" />
                                 Umbrales
                              </NavLink>
                           </li>
                           <li>
                              <NavLink to="workers">
                                 <BsPersonStanding className="h-5 w-5" />
                                 Evaluadores
                              </NavLink>
                           </li>
                           <li>
                              <NavLink to="seasons">
                                 <FaCalendarAlt className="h-5 w-5" />
                                 Campañas
                              </NavLink>
                           </li>
                        </ul>
                     </details>
                  </li>
               </ul> */}
            </nav>
         </aside>
      </div>
   );
}
