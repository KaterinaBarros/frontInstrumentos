import "../App.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

function MenuOpciones() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para el estado de inicio de sesión

  // Función para cerrar sesión

  const cerrarSesion = async () => {

    sessionStorage.removeItem('user');
    setIsLoggedIn(false); // Actualiza el estado de isLoggedIn a falso
    navigate('/home', {
      replace: true,
      state: {
        logged: false
      },
    });
  }

  useEffect(() => {
    const usuario = sessionStorage.getItem('user');
    if (usuario) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
      <>
        <div className="navbar">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" aria-current="true" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DondeEstamos">
                Donde Estamos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/grilla">
                Grilla
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ChartsGoogle">
                Charts Google
              </a>
            </li>
            {isLoggedIn ? (
                <li className="nav-item">
                  <button onClick={cerrarSesion} className="btn btn-success" type="button">
                    Cerrar Sesión
                  </button>
                </li>
            ) : null}
          </ul>
        </div>
      </>
  );
}

export default MenuOpciones;

