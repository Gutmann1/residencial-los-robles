import React, { useState } from 'react';
import PagoEnLinea from './PagoEnLinea'; 
import DashboardAdmin from './DashboardAdmin';
import ReporteCiudadano from './ReporteCiudadano';

function App() {
  // 1. Estado para controlar la pantalla actual (inicia en 'login')
  const [pantallaActual, setPantallaActual] = useState('login');

  // --- COMPONENTE 1: Pantalla de Login ---
  const PantallaLogin = () => (
    <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Iniciar Sesión</h2>
      <input type="text" placeholder="Usuario / Correo" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
      <input type="password" placeholder="Contraseña" style={{ width: '100%', padding: '8px', marginBottom: '15px' }} />
      
      {/* Botón para Vecinos */}
      <button 
        onClick={() => setPantallaActual('dashboard')}
        style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}
      >
        Ingresar como Vecino
      </button>

      {/* NUEVO: Botón para Administrador */}
      <button 
        onClick={() => setPantallaActual('admin')}
        style={{ width: '100%', padding: '10px', backgroundColor: '#34495e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Ingresar como Administrador
      </button>
    </div>
  );

  // --- COMPONENTE 2: Pantalla de Dashboard (Estado de cuenta Vecino) ---
  const PantallaDashboard = () => (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Bienvenido, Vecino</h2>
      <div style={{ backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', marginBottom: '20px', color: '#721c24' }}>
        <h3>Estado de Cuenta</h3>
        <p>Tienes un saldo pendiente de:</p>
        <h2 style={{ margin: '5px 0' }}>$1,200.00 MXN</h2>
        <p style={{ fontSize: '0.8em' }}>Correspondiente a: Mantenimiento Marzo 2026</p>
      </div>
      
      {/* Botones de navegación */}
      <button 
        onClick={() => setPantallaActual('pago')}
        style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}
      >
        Pagar Ahora
      </button>

      {/* NUEVO: Botón para generar reporte ciudadano */}
      <button 
        onClick={() => setPantallaActual('reporte')}
        style={{ width: '100%', padding: '10px', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}
      >
        Reportar Falla / Incidencia
      </button>

      <button 
        onClick={() => setPantallaActual('login')}
        style={{ width: '100%', padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Cerrar Sesión
      </button>
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* El encabezado siempre se mantiene visible */}
      <div style={{ textAlign: 'center' }}>
        <h1>Residencial Los Robles 🌳</h1>
        <p>Portal de administración vecinal</p>
        <hr style={{ margin: '30px 0' }} />
      </div>

      {/* 2. Lógica para mostrar la pantalla correcta */}
      {pantallaActual === 'login' && <PantallaLogin />}
      {pantallaActual === 'dashboard' && <PantallaDashboard />}
      
      {pantallaActual === 'pago' && (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <PagoEnLinea />
            <button 
              onClick={() => setPantallaActual('dashboard')}
              style={{ width: '100%', padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' }}
            >
              Volver al Estado de Cuenta
            </button>
        </div>
      )}

      {/* --- NUEVAS RUTAS INTEGRADAS --- */}
      
      {pantallaActual === 'reporte' && (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <ReporteCiudadano />
            <button 
              onClick={() => setPantallaActual('dashboard')}
              style={{ width: '100%', padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' }}
            >
              Volver al Estado de Cuenta
            </button>
        </div>
      )}

      {pantallaActual === 'admin' && (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <DashboardAdmin />
            <button 
              onClick={() => setPantallaActual('login')}
              style={{ width: '100%', padding: '10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' }}
            >
              Cerrar Sesión (Admin)
            </button>
        </div>
      )}
      
    </div>
  );
}

export default App;