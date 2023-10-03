import React from "react";
import { TbListDetails } from "react-icons/tb";
import { RiBillFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { GrVmMaintenance } from "react-icons/gr";

function Project() {
  return (
    <section className="py-24   min-h-screen">
      <aside className="w-fit  px-8 md:pl-16  flex flex-col gap-4 shadow-md p-3">
        <header className="flex">
          <div>
            <h5 className="text-sm bold">Tiquicia Express</h5>
            <span className="text-xs ">Web app</span>
          </div>
        </header>

        <nav>
          <h6 className="bold text-sm mb-3">General</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              {" "}
              <TbListDetails /> Detalles
            </li>
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              {" "}
              <RiBillFill /> Facturación
            </li>
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              {" "}
              <BsCodeSlash /> Código fuente
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="bold text-sm mb-3">Servicios</h6>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              {" "}
              <GrHostMaintenance /> Hosting
            </li>
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              {" "}
              <ImStatsBars /> Métricas
            </li>
            <li className="flex gap-3 font-medium text-xs text-gray-600">
              <GrVmMaintenance /> Mejoras
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}

export default Project;
