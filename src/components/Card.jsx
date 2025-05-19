import React from "react";
import ListTech from "./ListTech";
function Card({ arrayTech, title = "titulo", description, img, arrayPoints }) {
  return (
    <div className="w-full min-h-96 flex flex-col p-4 border-b-1 border-gray-500">
      <ListTech techs={arrayTech} />
      <div className="w-full h-1/2">
        <img
          className="object-cover w-full h-full"
          alt="proyect"
          src={img}
        ></img>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <ul>
          {arrayPoints.map((point) => (
            <li key={point} className="list-disc">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 transition duration-300">
          Backend-repo
        </button>
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 transition duration-300">
          frontend-repo
        </button>
        <button className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 transition duration-300">
          Page-repo
        </button>
      </div>
    </div>
  );
}

export default Card;
