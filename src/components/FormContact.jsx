import React, { useState } from "react";

function FormContact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  
  const [dataForContact, setDataForContact] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const handleDataForContact = async (e) => {
    e.preventDefault();
    try {
      setSent(false);

      setLoading(true);
      const response = await fetch("https://formspree.io/f/mldplqjw", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForContact),
      });
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        console.log(data);
        setSent(true);
      }
    } catch (error) {
      console.log(error);
    }
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
            type="email"
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
