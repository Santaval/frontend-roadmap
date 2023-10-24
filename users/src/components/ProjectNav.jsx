import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { RiBillFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { GrVmMaintenance } from "react-icons/gr";
import { BiSolidCaretRightCircle } from "react-icons/bi";
function ProjectNav() {
  const [active, setActive] = useState(true);
  return (
    <>
      <BiSolidCaretRightCircle onClick={() => setActive(!active)} className={`text-2xl z-50  text-primary absolute  md:hidden ${active && "rotate-180 transition-all left-28"}`} />
     {active &&  <aside className="w-screen  min-w-screen  md:w-fit md:min-w-[250px] px-8 md:pl-16 h-screen  md:flex flex-col gap-4 shadow-md p-3">
        <header className="flex">
          <div>
            <h5 className="text-sm bold">Tiquicia Express</h5>
            <span className="text-xs ">Web app</span>
          </div>
        </header>

        <nav>
          <h6 className="bold text-sm mb-3">General</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              {" "}
              <TbListDetails /> Detalles
            </li>
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              {" "}
              <RiBillFill /> Facturación
            </li>
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              {" "}
              <BsCodeSlash /> Código fuente
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="bold text-sm mb-3">Servicios</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              {" "}
              <GrHostMaintenance /> Hosting
            </li>
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              {" "}
              <ImStatsBars /> Métricas
            </li>
            <li className="flex items-center gap-3 font-medium text-xs text-gray-600">
              <GrVmMaintenance /> Mejoras
            </li>
          </ul>
        </nav>
      </aside>}
    </>
  );
}

export default ProjectNav;
