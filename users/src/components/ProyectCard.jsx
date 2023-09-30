import React from "react";

function ProyectCard({ projectKey, name, url}) {
  return (
    <article data-aos="fade-up" >
      <header className="flex flex-col items-center justify-center" style={{ backgroundImage: `url()` }}>
         <img className="w-96" src={`./${projectKey}.png`} alt="" />
         <h3 className="font-bold">{name}</h3>
         <span className="text-xs text-gray-500">{url}</span>
      </header>

      <a className="flex justify-center" target="_blank" href={`https://${url}`} rel="noreferrer">
        <button className="bg-primary text-white w-full md:w-1/2 py-2 mt-4 rounded-md">
          Ver proyecto
        </button>
      </a>
    </article>
  );
}

export default ProyectCard;
