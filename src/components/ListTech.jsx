import React from "react";

import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa6";
const ICONS = {
  nodejs: <FaNodeJs fontSize={"25px"} color="#0b0" />,
  react: <FaReact fontSize={"25px"} color="#0bf" />,
  tailwind: <RiTailwindCssFill fontSize={"25px"} color="#0bf" />,
  express: <SiExpress fontSize={"25px"} color="#0ff" />,
  mongodb: <DiMongodb fontSize={"25px"} color="#0a1" />,
  graphql: <GrGraphQl fontSize={"25px"} color="#a00" />,
  discordjs: <FaDiscord  fontSize={"25px"}/ >

};

function ListTech({ techs = [] }) {
  return (
    <ul className="w-full flex flex-wrap gap-2 justify-center">
      {techs.map((tech) => (
        <li key={tech} className="flex py-2  items-center">
          {ICONS[tech.toLowerCase()]}
        </li>
      ))}
    </ul>
  );
}

export default ListTech;
