import React, { useEffect } from "react";
import ProyectCard from "../components/ProyectCard";
import Aos from "aos";
export default function Home() {

  
    useEffect(() => {
      Aos.init();
    } ,[])

    return (
      <>
        <section
        data-aos="fade-up"
          id="inicio"
          className="flex items-center justify-center h-screen"
        >
          <div>
            <h1 className="bold dark:text-white text-6xl md:text-8xl primary-txt">
              Savaldev
              <span data-aos="fade-left" data-aos-duration={1500} className="text-primary">.</span>
            </h1>

            <p className="dark:text-gray-500">
              Desarrolla tu web |{" "}
              <span data-aos="fade-up" data-aos-duration={2000} className="text-primary">Desarrolla tus ideas</span>
            </p>
          </div>
        </section>

        <section id="proyectos" className="min-h-screen px-12 dark:text-white ">
          <header>
            <h2  className="text-4xl font-semibold text-center w-fit m-auto">
              <span data-aos="fade-right" data-aos-duration={2000} className="text-primary">{"{ "}</span>
              Proyectos
              <span data-aos="fade-left" data-aos-duration={2000} className="text-primary">{" }"}</span>
            </h2>
          </header>

          <div className="mt-24 flex flex-col gap-10 md:flex-row md:justify-around">
            <ProyectCard
              projectKey="TE"
              name="Tiquicia Express"
              url={"tiquiciaexpress.com"}
            />
            <ProyectCard
              projectKey="ST"
              name="Speedtechcr"
              url={"speedtechcr.com"}
            />
            <ProyectCard
              projectKey="AC"
              name="AC Importadora"
              url={"en desarrollo"}
            />
          </div>
        </section>

        <section className="min-h-screen px-24">
          <header>
            <h2 className="text-4xl font-semibold text-center w-fit m-auto">
              <span data-aos="fade-right" data-aos-duration={2000}  className="text-primary">{"[ "}</span>
              Sobre Nosotros
              <span data-aos="fade-left" data-aos-duration={2000}  className="text-primary">{" ]"}</span>
            </h2>
          </header>

          <article className="flex justify-center">
            <p data-aos="zoom-in" className="font-light text-sm  mt-12 w-full md:w-1/2 text-gray-600">
              Saval es la pasión de un desarrollador web por crear soluciones con un
              enfoque centrado en el cliente. Nuestro objetivo es brindar a nuestros
              clientes un servicio personalizado, trabajar en colaboración con
              ellos para entender sus necesidades y ofrecer soluciones que
              satisfagan sus objetivos. Nos
              enorgullece trabajar con profesionalismo y ética, entregando
              proyectos de alta calidad en tiempo y forma. Puedes
              estar seguro de que estás trabajando con desarrolladores
              comprometidos en crear soluciones web eficaces, atractivas e
              intuitivas para ti y tu audiencia.
            </p>
          </article>
        </section>
        <footer></footer>
      </>
    );
  }


