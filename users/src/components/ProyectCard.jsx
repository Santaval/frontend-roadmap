import React from "react";

function ProyectCard({ projectKey, name, url}) {
  return (
    <article >
      <header className="flex flex-col items-center justify-center" style={{ backgroundImage: `url()` }}>
         <img className="w-96" src={`./${projectKey}.png`} alt="" />
         <h3 className="font-bold">{name}</h3>
         <span className="text-xs text-gray-500">{url}</span>
      </header>
    </article>
  );
}

export default ProyectCard;
