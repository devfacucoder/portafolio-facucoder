import React from "react";
import Card from "./Card";
import proyectos from "../assets/proyectos.json";
function SectionProyect() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center gap-2 border-t-2 border-white "
      id="proyects"
    >
      <h3>My Proyects</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {proyectos.map((proyect) => (
          <li key={proyect.id} className="w-full">
            <Card
              arrayTech={proyect.arrayTechs}
              title={proyect.title}
              description={proyect.description}
              img={proyect.image}
              arrayPoints={proyect.arrayPoints}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SectionProyect;
