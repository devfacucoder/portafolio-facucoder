import React, { useState,useContext } from "react";
import {Idioma} from "../App"
function SelectIdioma() {
  const [viewList, setViewList] = useState(false);
  const [idioma,setIdoma] = useContext(Idioma)
  return (
    <div className="flex gap-2 relative w-24">
      <button
        className="flex bg-gray-700 w-full cursor-pointer"
        onClick={() => {
          setViewList(!viewList);
        }}
      >
        <img
          className="w-10 h-8 border-1 object-cover"
          src={idioma === "es" ? "/icon-es.png" : "/icon-eng.png"}
          alt=""
        />
        <span className="flex w-14  items-center justify-center">
          {idioma === "es" ? "es/ARG" : "en/USA"}
        </span>
      </button>
      <div
        className={`${
          viewList ? "flex" : "hidden"
        } absolute z-10 top-8 bg-gray-700 w-full`}
      >
        <button
          className="flex w-full cursor-pointer"
          onClick={() => {
            setIdoma(idioma === "es" ? "en" : "es");
            setViewList(false);
          }}
        >
          <img
            className="w-10 h-8 border-1 object-cover"
            src={idioma === "es" ? "/icon-eng.png" : "/icon-es.png"}
            alt=""
          />
          <span className="flex w-14  items-center justify-center">
            {idioma === "es" ? "en/USA" : "es/ARG"}
          </span>
        </button>
      </div>
    </div>
  );
}
/**
 * <button className="w-10 h-8 border-1 ">
        <img className="w-full h-full object-cover" src="/icon-es.png" alt="" />
      </button>
      <button className="w-10 h-8 border-1 ">
        <img
          className="w-full h-full object-cover"
          src="/icon-eng.png"
          alt=""
        />
      </button>
 */
export default SelectIdioma;
