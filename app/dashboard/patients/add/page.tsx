'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  
  const router = useRouter();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const data = {
      name,
      lastname,
      birthdate,
      gender,
      address,
      phone,
      email
    };
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pacientes/`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    alert('Paciente agregado con exito');
    router.push('/dashboard/patients/list');
  };
  
  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-md text-orange">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="lastname">Lastname:</label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="birthdate">Birthdate:</label>
          <input
            id="birthdate"
            type="date"
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <div className="mb-4">
        <label className="block mb-1" htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          >
            <option value="">Seleccione</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>

        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-3 py-2 border bg-second rounded-md focus:outline-none border-black focus:border-blue-500 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );  

}