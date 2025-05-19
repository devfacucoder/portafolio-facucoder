import React from "react";

function Card() {
  return (
    <div className="w-full min-h-96 flex flex-col p-4 border-b-1 border-gray-500">
      <div className="w-full h-1/2">
        <img className="object-cover w-full h-full" alt="proyect"
        src="/turnos.PNG"></img>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quos, voluptates, voluptatibus, quos, voluptates,
          voluptatibus, quos, voluptates, voluptatibus, quos, voluptates,
          voluptatibus, quos, voluptates.
        </p>
        <ul>
          <li >-Crud imagenes </li>
          <li>-api-rest-ful </li>
          <li>
            -Database MongoDB
          </li>
          <li>
            -Login
          </li>
          <li>
            -Verificacion de usuario
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
