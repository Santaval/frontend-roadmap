import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
    const [leftNav, setLeftNav] = useState(false);
  return (
    <nav className=" w-screen bg-white dark:bg-gray-900 fixed flex items-center justify-between px-4 md:px-16 py-4">
      <div className="flex  items-center gap-4">
        <FontAwesomeIcon
            onClick={() => setLeftNav(!leftNav)}
          className="text-2xl text-primary md:hidden   cursor-pointer"
          icon={faBars}
        />
        <h6 className="text-2xl  text-gray-600 dark:text-white  bold">
          Savaldev
        </h6>
      </div>

      <ul className="hidden gap-8  text-gray-600  md:flex  ">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/#proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/#tecnologías">Tecnologías</Link>
        </li>
        <li>
          <Link to="/#about">Sobre nosotros</Link>
        </li>
      </ul>
      <button
        className="focus:outline-none min-w-[50px] text-gray-600"
        onClick={() => {
          document.body.classList.toggle("dark");
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>

      <ul className={`absolute  flex-col gap-5 pt-4 top-0 left-0 h-screen px-4 shadow-lg w-1/2  bg-white  md:hidden text-gray-600 dark:bg-gray-900  ${leftNav ? "flex" : "hidden"}`}>
      <li className="flex gap-4 items-center">
      <FontAwesomeIcon
      onClick={() => setLeftNav(!leftNav)}
          className="text-2xl text-primary md:hidden   cursor-pointer"
          icon={faBars}
        />
        <h6 className="text-2xl  text-gray-600 dark:text-white  bold">
          Savaldev
        </h6>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/#proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/#tecnologías">Tecnologías</Link>
        </li>
        <li>
          <Link to="/#about">Sobre nosotros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
