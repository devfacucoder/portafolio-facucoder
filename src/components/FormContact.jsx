import React, { useState } from "react";

function FormContact() {
  //https://formspree.io/f/mldplqjw
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [dataForContact, setDataForContact] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const handleDataForContact = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
    //
  };

  return (
    <div className="w-full  p-4 flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleDataForContact}
        className="flex gap-4 flex-col  p-2 w-full sm:w-[400px]"
      >
        <h3 className="text-[30px] font-mono">Contacto</h3>
        <div className="flex flex-col">
          <label htmlFor="inpNombre">Nombre</label>
          <input
            onChange={(e) => {
              setDataForContact((prev) => ({
                ...prev,
                nombre: e.target.value,
              }));
            }}
            type="text"
            id="inpNombre"
            className="bg-blue-950 h-[35px] p-2"
            placeholder="Ingrese su Nombre"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="inpEmail">Email</label>
          <input
            onChange={(e) => {
              setDataForContact((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            type="text"
            id="inpEmail"
            className="bg-blue-950 h-[35px] p-2"
            placeholder="Ingrese un Email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="inpMensaje">Mensaje</label>
          <textarea
            onChange={(e) => {
              setDataForContact((prev) => ({
                ...prev,
                mensaje: e.target.value,
              }));
            }}
            id="inpMensaje"
            className="bg-blue-950 p-2 h-[200px]"
            placeholder="Ingrese su Mensaje"
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-700 h-[40px] w-[150px] text-3xl">
            Enviar
          </button>
          {loading ? (
            <p className="text-[18px] text-white">Enviando...</p>
          ) : null}

          {sent ? (
            <p className="text-[18px] text-green-600">Mensaje Enviado</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default FormContact;
