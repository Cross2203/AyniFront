'use client';
import React, { useState, useEffect } from "react";


export default function Page({ params }: { params: { patientId: number } }) {
  const [tipo_examen, setTipoExamen] = useState<number>(1);
  const [descripcion, setDescripcion] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      tipo_examen,
      descripcion,
      pacient: params.patientId
    }
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/examenfisico/`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = fetch(endpoint, options);
    alert('Examen anadido con exito');
    setTipoExamen(1);
    setDescripcion("");
    window.location.reload();
    
  };

  return (
    <div className="max-w-6xl mx-auto p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="block mb-1 font-bold text-lg mt-4 text-orange">Examen Fisico</p>
          <label className="block mb-1" htmlFor="tipoExamen">Tipo de Examen</label>
          <select
            id="tipoExamen"
            className="w-full bg-second px-3 py-2 border-black rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setTipoExamen(Number(e.target.value))}
          >
            <option value={1}>Piel</option>
            <option value={2}>Cabeza</option>
            <option value={3}>Boca</option>
            <option value={4}>Ojos</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="descripcion5">Descripcion</label>
          <textarea 
            id="descripcion5"
            className="w-full px-3 py-2 border-black bg-second rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="w-full py-2 bg-brown rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Agregar Examen
        </button>
      </form>
    </div>
  );
}