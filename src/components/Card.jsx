import React from "react";
import ListTech from "./ListTech";

function Card({ arrayTech, title = "titulo", description, img, arrayPoints }) {
  return (
    <div className="w-full min-h-96 flex pb-2 flex-col items-center border-b-1 border-gray-500">
      <ListTech techs={arrayTech} />

      <div className="w-full h-1/2">
        <img
          className="object-cover w-full h-full"
          alt="proyect"
          src={img}
        />
      </div>

      <div className="w-full px-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <ul className="list-disc list-inside">
          {arrayPoints.map((point, index) => (
            <li key={`${point}-${index}`}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300">
          Backend-repo
        </button>
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300">
          Frontend-repo
        </button>
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 hover:text-white transition duration-300">
          Page-repo
        </button>
      </div>
    </div>
  );
}

export default Card;
