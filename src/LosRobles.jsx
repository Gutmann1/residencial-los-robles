import React, { useState } from 'react';

function LosRobles() {
  // Usamos un Hook para manejar el estado de la sesión, Así cumplimos con la arquitectura de react y mantenemos todo limpio y organizado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1> Residencial Los Robles </h1>
      <p><em>Gestión Ágil de Condominios</em></p>
      <hr />

      {!isLoggedIn ? (
        // EVIDENCIA H-01: Login Seguro (Esfuerzo: 5 pts)
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px', display: 'inline-block' }}>
          <h2>Portal del Vecino</h2>
          <input type="text" placeholder="Usuario (Casa #)" style={{ margin: '5px', padding: '10px', width: '200px' }} /> <br />
          <input type="password" placeholder="Contraseña" style={{ margin: '5px', padding: '10px', width: '200px' }} /> <br />
          <button 
            onClick={() => setIsLoggedIn(true)} 
            style={{ padding: '10px 20px', backgroundColor: '#2c3e50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}
          >
            Iniciar Sesión
          </button>
        </div>
      ) : (
        // EVIDENCIA H-02: Pago en Línea (Esfuerzo: 8 pts)
        <div>
          <h2> Estado de Cuenta Mensual</h2>
          <div style={{ border: '2px solid #27ae60', padding: '20px', borderRadius: '10px', display: 'inline-block', backgroundColor: '#eafaf1' }}>
            <p><strong>Concepto:</strong> Mantenimiento Febrero 2026</p>
            <p><strong>Monto:</strong> $1,500.00 MXN</p>
            <p><strong>Estatus:</strong> <span style={{ color: '#e67e22', fontWeight: 'bold' }}>PENDIENTE</span></p>
            <button 
              onClick={() => alert('Conectando con pasarela de pago segura...')}
              style={{ padding: '15px 30px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Realizar Pago Ahora
            </button>
          </div>
          <br />
          <button onClick={() => setIsLoggedIn(false)} style={{ marginTop: '30px', background: 'none', border: 'none', color: '#7f8c8d', cursor: 'pointer', textDecoration: 'underline' }}>
            Salir del sistema
          </button>
        </div>
      )}
    </div>
  );
}

export default LosRobles;