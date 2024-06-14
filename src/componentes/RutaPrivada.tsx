import {ReactNode} from 'react';
import { Navigate} from 'react-router-dom';


export const RutaPrivada = ({ children }: { children: ReactNode }) => {

    const user = sessionStorage.getItem('user');
    const isAuthenticated = user !== null; // Verifica si el usuario está autenticado
    console.log('RutaPrivada: usuario autenticado:', isAuthenticated);
    console.log('RutaPrivada: datos del usuario:', user);

    return isAuthenticated ? children: <Navigate to='/Login' />;

};




