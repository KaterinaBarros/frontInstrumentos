import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Producto from './componentes/Menu';
import DetalleInstrumento from './componentes/DetalleInstrumento';
import Home from './Home';
import DondeEstamos from './DondeEstamos';
import GrillaInstrumento from './componentes/GrillaInstrumento';
import Formulario from './componentes/Formulario';
import ChartsGoogle from './componentes/ChartsGoogle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './componentes/Login';
import FormUsuario from './componentes/FormUsuario';
import {RutaPrivada} from './componentes/RutaPrivada';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/FormUsuario" element={<FormUsuario />} />
          <Route path="/menu" element={
            <RutaPrivada>
              <Producto />
            </RutaPrivada>
          } />
          <Route path="/home" element={<Home />} />
          <Route path="/DondeEstamos" element={<DondeEstamos />} />
          <Route path="/detalle/:idInstrumento" element={<DetalleInstrumento />} />
          <Route path="/grilla" element={
            <RutaPrivada>
              <GrillaInstrumento />
            </RutaPrivada>
          } />
          <Route path="/formulario/:idInstrumento" element={
            <RutaPrivada>
              <Formulario />
            </RutaPrivada>
          } />
          <Route path="/ChartsGoogle" element={
            <RutaPrivada>
              <ChartsGoogle />
            </RutaPrivada>
          } />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
