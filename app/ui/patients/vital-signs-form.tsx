import React, { useState } from 'react';
import { VitalSignsData, FormData } from '@/app/ui/patients/interfaces';

interface VitalSignsFormProps {
  data: VitalSignsData;
  onChange: (formName: keyof FormData, field: keyof VitalSignsData, value: string) => void;
}

const VitalSignsForm: React.FC<VitalSignsFormProps> = ({ data, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    onChange('vitalSigns', id as keyof VitalSignsData, value);
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="max-w-6xl mx-auto p-6 rounded-md shadow-md">
      <div>
        <div onClick={toggleVisibility}>
          <p className="block mb-4 font-bold text-lg cursor-pointer">
            Signos Vitales {isVisible ? '▼' : '▲'}
          </p>
        </div>
        {isVisible && (
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="temperatura">
                Temperatura
              </label>
              <input
                type="text"
                id="temperatura"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.temperatura}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="presion_arterial_sistolica">
                Presión arterial sistólica
              </label>
              <input
                type="text"
                id="presion_arterial_sistolica"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.presion_arterial_sistolica}
                onChange={handleInputChange}
              />
              <label className="block mb-1" htmlFor="presion_arterial_diastolica">
                Presión arterial diastólica
              </label>
              <input
                type="text"
                id="presion_arterial_diastolica"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.presion_arterial_diastolica}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="frecuencia_cardiaca">
                Frecuencia cardiaca
              </label>
              <input
                type="text"
                id="frecuencia_cardiaca"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.frecuencia_cardiaca}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="frecuencia_respiratoria">
                Frecuencia respiratoria
              </label>
              <input
                type="text"
                id="frecuencia_respiratoria"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.frecuencia_respiratoria}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="peso">
                Peso
              </label>
              <input
                type="text"
                id="peso"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.peso}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="talla">
                Talla
              </label>
              <input
                type="text"
                id="talla"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.talla}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="saturacion_oxigeno">
                Saturación de oxígeno
              </label>
              <input
                type="text"
                id="saturacion_oxigeno"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second"
                value={data.saturacion_oxigeno}
                onChange={handleInputChange}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default VitalSignsForm;
