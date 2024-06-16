'use client';
import React, { useEffect, useState } from 'react';
import { fetchHistorial, HistorialMedico } from '@/app/ui/patients/fetch-historial';

interface PageProps {
  params: {
    patientId: number;
  };
}

const HistorialEntry = ({ entry }: { entry: HistorialMedico }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGeneratePDF = () => {
    window.open(`${process.env.NEXT_PUBLIC_BACKEND_URL}/historial/pdf/${entry.id_historial}`, '_blank');
  };

  return (
    <div className="historial-entry">
      <div
        className="historial-summary cursor-pointer p-4 border-b"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>Fecha: {new Date(entry.fecha_creacion).toLocaleDateString()}</h2>
      </div>
      {isExpanded && (
        <div className="historial-details p-4 border-b">
          <h3>Consulta</h3>
          {entry.consulta ? (
            <div>
              <p>Fecha: {new Date(entry.consulta.fecha_consulta).toLocaleDateString()}</p>
              <p>Motivo: {entry.consulta.motivo}</p>
              <p>Notas Médicas: {entry.consulta.notas_medicas}</p>
            </div>
          ) : (
            <p>No hay consulta registrada.</p>
          )}
          <h3>Signos Vitales</h3>
          {entry.signos_vitales ? (
            <div>
              <p>Temperatura: {entry.signos_vitales.temperatura}</p>
              <p>Presión Arterial: {entry.signos_vitales.presion_arterial_sistolica}/{entry.signos_vitales.presion_arterial_diastolica}</p>
              <p>Frecuencia Cardíaca: {entry.signos_vitales.frecuencia_cardiaca}</p>
              <p>Frecuencia Respiratoria: {entry.signos_vitales.frecuencia_respiratoria}</p>
              <p>Peso: {entry.signos_vitales.peso}</p>
              <p>Talla: {entry.signos_vitales.talla}</p>
              <p>Saturación de Oxígeno: {entry.signos_vitales.saturacion_oxigeno}</p>
            </div>
          ) : (
            <p>No hay signos vitales registrados.</p>
          )}
          <h3>Diagnóstico</h3>
          {entry.diagnostico ? (
            <div>
              <p>Nombre: {entry.diagnostico.nombre}</p>
              <p>Descripción: {entry.diagnostico.descripcion}</p>
            </div>
          ) : (
            <p>No hay diagnóstico registrado.</p>
          )}
          <h3>Tratamiento</h3>
          {entry.tratamiento ? (
            <div>
              <p>Descripción: {entry.tratamiento.descripcion}</p>
              <p>Duración: {entry.tratamiento.duracion}</p>
              <p>Dosis: {entry.tratamiento.dosis}</p>
              <p>Frecuencia: {entry.tratamiento.frecuencia}</p>
            </div>
          ) : (
            <p>No hay tratamiento registrado.</p>
          )}
          <h3>Receta</h3>
          {entry.receta ? (
            <div>
              <p>Fecha: {new Date(entry.receta.fecha_receta).toLocaleDateString()}</p>
              <p>Medicamentos Recetados: {entry.receta.medicamentos_recetados}</p>
            </div>
          ) : (
            <p>No hay receta registrada.</p>
          )}
          <button onClick={handleGeneratePDF} className="mt-4 p-2 bg-blue-500 text-white rounded">Generar PDF</button>
        </div>
      )}
    </div>
  );
};

export default function Page({ params }: PageProps) {
  const [historial, setHistorial] = useState<HistorialMedico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistorial = async () => {
      try {
        const fetchedHistorial = await fetchHistorial(params.patientId);
        setHistorial(fetchedHistorial);
      } catch (err) {
        setError('Failed to fetch historial');
      } finally {
        setLoading(false);
      }
    };

    loadHistorial();
  }, [params.patientId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Historial Médico</h1>
      {historial.map((entry) => (
        <HistorialEntry key={entry.id_historial} entry={entry} />
      ))}
    </div>
  );
}
