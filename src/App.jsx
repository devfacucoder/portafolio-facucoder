import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

import "./App.css";
import ListTech from "./components/ListTech";
import SectionProyect from "./components/SectionProyect";
function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-4">
      <section className="flex flex-col w-full gap-2 min-h-screen ">
        <div className="flex w-full flex-col justify-center items-center">
          <h1 className="text-4xl">Full Stack Developer</h1>
          <h2 className="text-5xl font-bold text-center">{"</>"}</h2>
          <h3 className="text-4xl">Facundo Ferreyra</h3>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <h3>Technologys</h3>
          <ListTech />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h3>Contact</h3>
          <div className="flex gap-4">
            <FaGithub />
            <FaLinkedin />
            <CiInstagram />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h3>About Me</h3>
          <p className="text-sm leading-relaxed max-w-2xl px-4 text-center">
            Soy Facundo Ferreyra, desarrollador full stack con experiencia
            construyendo aplicaciones web usando React, Node.js, Express,
            MongoDB y GraphQL. Actualmente estudio programación web y trabajo en
            proyectos que integran sistemas, APIs y CRUDs personalizados. Busco
            seguir creciendo como profesional y como persona, aportando
            soluciones reales y aprendiendo en cada paso.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">

          <button onClick={()=>{
            window.location.href = "#proyects"
          }} className="bg-white text-black cursor-pointer border-2 border-black p-2 btn-shadow hover:bg-gray-700 transition duration-300">
            
            Ver Proyectos
          </button>

        </div>

      </section>
          <SectionProyect/>
    </div>
  );
}

export default App;
