import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../componentes/Usuario";
import { getDatosUsuario } from "../servicios/FuncionesApi";
import MenuOpciones from "./MenuOpciones.tsx";

function Login() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [txtValidacion, setTxtValidacion] = useState<string>("");

    const login = async () => {
        if (!usuario.usuario) {
            setTxtValidacion("Ingrese el nombre de usuario");
            return;
        }
        if (!usuario.clave) {
            setTxtValidacion("Ingrese la clave");
            return;
        }

        try {
            const userData = await getDatosUsuario(usuario.usuario, usuario.clave);
            if (userData) {
                sessionStorage.setItem('user', JSON.stringify(userData)); // Almacena el usuario en localStorage
                setTxtValidacion("Login exitoso");
                navigate('/Menu');
            } else {
                setTxtValidacion("Error al obtener los datos del usuario");
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario", error);
            setTxtValidacion("Error al obtener los datos del usuario");
        }
    };

    return (
        <>
        <div className="center">
            <form>
                <div className="mb-3">
                    <label htmlFor="txtUsuario" className="form-label">Usuario</label>
                    <input
                        type="text"
                        id="txtUsuario"
                        className="form-control"
                        placeholder="Ingrese el nombre"
                        value={usuario.usuario}
                        onChange={(e) => setUsuario({ ...usuario, usuario: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && login()}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="txtClave" className="form-label">Clave</label>
                    <input
                        type="password"
                        id="txtClave"
                        className="form-control"
                        placeholder="Ingrese la clave"
                        value={usuario.clave}
                        onChange={(e) => setUsuario({ ...usuario, clave: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && login()}
                    />
                </div>
                <div className="col">
                    <button onClick={login} className="btn btn-success" type="button">
                        Ingresar
                    </button>
                </div>
                <div className="col-1 border-end">
                    <a className="btn btn-info" style={{ marginBottom: 10 }} href="/FormUsuario">
                        Registrarse
                    </a>
                </div>
                <div>
                    <p style={{ color: 'red', lineHeight: 5, padding: 5 }}>{txtValidacion}</p>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;
