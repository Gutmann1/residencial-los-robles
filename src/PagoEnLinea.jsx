import React, { useState } from 'react';

const PagoEnLinea = () => {
  // 1. Estados para guardar la información del formulario
  const [datosPago, setDatosPago] = useState({
    tarjeta: '',
    fechaExp: '',
    cvv: ''
  });
  
  // 2. Estados para manejar la interfaz de carga y los mensajes
  const [procesando, setProcesando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // 3. Función para capturar lo que el usuario escribe
  const handleChange = (e) => {
    setDatosPago({
      ...datosPago,
      [e.target.name]: e.target.value
    });
  };

  // 4. Función que simula el envío a la pasarela de pago
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setProcesando(true);
    setMensaje('');

    // Usamos setTimeout para simular que estamos esperando la respuesta del banco (2 segundos)
    setTimeout(() => {
      setProcesando(false);
      setMensaje('¡Pago procesado con éxito! Tu estado de cuenta ha sido actualizado.');
      
      // Limpiamos el formulario después de un pago exitoso
      setDatosPago({ tarjeta: '', fechaExp: '', cvv: '' });
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Pago de Cuota Mensual</h2>
      <p>Realiza tu pago de forma segura y sin salir de casa.</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Número de Tarjeta:</label>
          <input
            type="text"
            name="tarjeta"
            value={datosPago.tarjeta}
            onChange={handleChange}
            placeholder="0000 0000 0000 0000"
            maxLength="16"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
          <div style={{ flex: '1' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Vencimiento:</label>
            <input
              type="text"
              name="fechaExp"
              value={datosPago.fechaExp}
              onChange={handleChange}
              placeholder="MM/AA"
              maxLength="5"
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>CVV:</label>
            <input
              type="password"
              name="cvv"
              value={datosPago.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength="3"
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={procesando}
          style={{ width: '100%', padding: '10px', backgroundColor: procesando ? '#ccc' : '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {procesando ? 'Procesando pago...' : 'Pagar ahora'}
        </button>
      </form>

      {/* 5. Mensaje de éxito que aparece después de la simulación */}
      {mensaje && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default PagoEnLinea;