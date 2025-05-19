import React from "react";

import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import { GrGraphQl } from "react-icons/gr";

function ListTech() {
  return (
    <ul className="w-full flex flex-wrap   h-10  justify-center">
      <li className="  flex p-2 items-center">
        <FaNodeJs fontSize={"25px"} color="#0b0" />
      </li>
      
      <li className="  flex p-2 items-center">
        <FaReact fontSize={"25px"} color="#0bf" />
      </li>
      <li className="  flex p-2 items-center">
        <RiTailwindCssFill fontSize={"25px"} color="#0bf" />
      </li>
      <li className="  flex p-2 items-center">
        <SiExpress fontSize={"25px"} color="0ffff" />
      </li>
      <li className="  flex p-2 items-center">
        <DiMongodb fontSize={"25px"} color="#0a1" />
      </li>
      <li className="  flex p-2 items-center">
        <GrGraphQl fontSize={"25px"} color="#a00" />
      </li>
      
     
    </ul>
  );
}
/**<li>
        <FaReact />
      </li>
      <li>
        <RiTailwindCssFill />
      </li>

      <li>
        <SiExpress />
      </li>
      <li>
        <DiMongodb />
      </li> */
export default ListTech;
