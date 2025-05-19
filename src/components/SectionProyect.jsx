import React from "react";
import Card from "./Card";
function SectionProyect() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center gap-2 border-t-2 border-white "
      id="proyects"
    >
      <h3>My Proyects</h3>
      <ul className="w-full flex flex-col gap-2">
        <li className="w-full" >
          <Card/>

        </li>
        <li className="w-full" >
          <Card/>

        </li>
      </ul>
    </section>
  );
}

export default SectionProyect;
