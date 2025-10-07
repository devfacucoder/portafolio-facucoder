import React, { useState } from "react";
import ListTech from "./ListTech";

function Card({
  arrayTech,
  title = "titulo",
  description,
  img = [],
  arrayPoints = [],
  urlRepoBack = "#",
  urlRepoFront = "#",
  urlPagina = "#",
  urlLinkRepo="#"
}) {
  const [iterImg, setIterImg] = useState(0);

  const toggleImgs = (mode) => {
    if (mode === "next" && iterImg < img.length - 1) {
      setIterImg(iterImg + 1);
    } else if (mode === "prev" && iterImg > 0) {
      setIterImg(iterImg - 1);
    }
  };

  const handleRedirect = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full min-h-96 flex pb-2 flex-col items-center border-b border-gray-500">
      <ListTech techs={arrayTech} />

      <div className="w-full h-1/2">
        {img.length > 0 ? (
          <img
            className="object-cover w-full h-full"
            alt="proyect"
            src={img[iterImg]}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white">
            Sin imagen
          </div>
        )}
      </div>
      {img.length > 1 ? (
        <div className="w-full h-12 sm:hidden text-4xl flex justify-around">
          <button aria-label="Anterior" onClick={() => toggleImgs("prev")}>
            {"<"}
          </button>
          <button aria-label="Siguiente" onClick={() => toggleImgs("next")}>
            {">"}
          </button>
        </div>
      ) : null}

      <div className="w-full px-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <ul className="list-disc list-inside">
          {arrayPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {urlRepoBack === "" ? null : (
          <button
            onClick={() => handleRedirect(urlRepoBack)}
            className="bg-white text-black border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Backend-repo
          </button>
        )}
        {urlRepoFront === "" ? null : (
          <button
            onClick={() => handleRedirect(urlRepoFront)}
            className="bg-white text-black border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Frontend-repo
          </button>
        )}
        {urlPagina === "" ? null : (
          <button
            onClick={() => handleRedirect(urlPagina)}
            className="bg-white text-black border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Página
          </button>
        )}
        {
          urlLinkRepo ===""?null:(
            <button
            onClick={() => handleRedirect(urlLinkRepo)}
            className="bg-white text-black border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Repositorio
          </button>
          )
        }
      </div>
    </div>
  );
}

export default Card;
