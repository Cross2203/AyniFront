import React, { useState } from 'react';
import { ConsultationData, FormData } from '@/app/ui/patients/interfaces';


interface ConsultationFormProps {
  data: ConsultationData;
  onChange: (formName: keyof FormData, field: keyof ConsultationData, value: string) => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ data, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    onChange('consultation', id as keyof ConsultationData, value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-md shadow-md">
      <div>
        <div onClick={toggleVisibility}>
          <p className="block mb-4 font-bold text-lg cursor-pointer">
            Datos de la consulta {isVisible ? '▼' : '▲'}
          </p>
        </div>
        {isVisible && (
        <form>
          <div className="mb-4">
          <label className="block mb-1" htmlFor="fecha_consulta">
            Fecha
          </label>
          <input
            type="date"
            id="fecha_consulta"
            className="w-full px-3 py-2 border-black bg-second rounded-md focus:outline-none focus:border-blue-500"
            value={data.fecha_consulta}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="motivo">
            Motivo de consulta
          </label>
          <textarea
            id="motivo"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 border-black bg-second "
            value={data.motivo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="notas_medicas">
            Notas médicas
          </label>
          <textarea
            id="notas_medicas"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 border-black bg-second "
            value={data.notas_medicas}
            onChange={handleInputChange}
          />
        </div>
      </form>
      )}
      </div>
    </div>
  );
};

export default ConsultationForm;
