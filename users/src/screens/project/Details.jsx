import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import ProjectPreview from "../../components/ProjectPreview";

function Details() {
  return (
    <section className="w-full px-4 md:px-0">
      <section className="w-full  ">
        <ProjectPreview />

        <div className="flex justify-between w-full px-8 mx-auto mt-4 ">
          <div>
            <span className="font-light text-xs text-primary">Activo</span>
            <h5 className="font-medium text-sm">120 días</h5>
            <span className="font-light text-xs">23 AGO 2023</span>
          </div>
        </div>
      </section>

      <section className="w-full px-8  shadow-md py-4 mt-12">
        <h6 className="bold text-md">Actividad</h6>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center gap-1">
                <GiAutoRepair className="text-2xl text-primary" />
                <h5 className="font-medium text-sm">Última actualización</h5>
              </div>
              <span className="font-light text-xs">23 AGO 2023</span>
            </div>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Details;
