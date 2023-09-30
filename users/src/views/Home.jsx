import React, { Component } from "react";
import ProyectCard from "../components/ProyectCard";

export class Home extends Component {
  render() {
    return (
      <>
        <section
          id="inicio"
          className="flex items-center justify-center h-screen"
        >
          <div>
            <h1 className="bold dark:text-white text-6xl md:text-8xl primary-txt">
              Savaldev
              <span className="text-primary">.</span>
            </h1>

            <p className="dark:text-gray-500">
              Desarrolla tu web | <span className="text-primary">Desarrolla tus ideas</span>
            </p>
          </div>
        </section>

        <section id="proyectos" className="min-h-screen px-12 dark:text-white ">
          <header>
            <h2 className="text-4xl font-semibold text-center w-fit m-auto">
            <span className="text-primary">{"{ "}</span>
              Proyectos
              <span className="text-primary">{" }"}</span>
            </h2>
          </header>

            <div className="mt-24 flex flex-col gap-10 md:flex-row md:justify-around">
                <ProyectCard projectKey="TE" name="Tiquicia Express"  url={"tiquiciaexpress.com"}/>
                <ProyectCard projectKey="ST" name="Speedtechcr" url={"speedtechcr.com"}/>
                <ProyectCard projectKey="AC" name="AC Importadora" url={"en desarrollo"}/>
            </div>
        </section>
        <footer>
           
        </footer>
      </>
    );
  }
}

export default Home;
