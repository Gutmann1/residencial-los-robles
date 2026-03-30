import React, { useState } from 'react';

const ReporteCiudadano = () => {
  // Manejo de estado para los diferentes campos del formulario
  const [tipoFalla, setTipoFalla] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState(null);
  const [enviado, setEnviado] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Aquí es donde en un futuro conectarías tu API o Firebase
    console.log("Reporte a enviar:", { tipoFalla, descripcion, foto });
    
    // Simulamos un envío exitoso
    setEnviado(true);

    // Limpiamos el formulario después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setTipoFalla('');
      setDescripcion('');
      setFoto(null);
    }, 3000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px' }}>
      <h2 style={{ color: '#2c3e50' }}>Generar Reporte Ciudadano</h2>
      <p>Ayúdanos a mantener Residencial Los Robles en excelentes condiciones.</p>

      {/* Notificación de éxito condicional */}
      {enviado && (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px', marginBottom: '15px' }}>
          ¡Reporte enviado con éxito a la administración!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Selector de Tipo de Falla */}
        <label>
          Tipo de incidencia:
          <select 
            value={tipoFalla} 
            onChange={(e) => setTipoFalla(e.target.value)} 
            required
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Selecciona una opción...</option>
            <option value="luminaria">Luminaria fundida</option>
            <option value="bache">Bache en vialidad</option>
            <option value="seguridad">Incidente de seguridad</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        {/* Área de texto para la descripción */}
        <label>
          Descripción detallada:
          <textarea 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            required
            rows="4"
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            placeholder="Ej. La lámpara frente a la casa 24 parpadea constantemente..."
          />
        </label>

        {/* Input para simular la carga de foto */}
        <label>
          Evidencia Fotográfica (Opcional):
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            style={{ display: 'block', marginTop: '5px' }}
          />
        </label>

        {/* Botón de envío */}
        <button 
          type="submit" 
          style={{ backgroundColor: '#2980b9', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Enviar Reporte
        </button>
      </form>
    </div>
  );
};

export default ReporteCiudadano;