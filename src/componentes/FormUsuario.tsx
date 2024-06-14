// src/components/UserForm.tsx
import React, { useState, FormEvent } from 'react';
import { sendUserData } from "../servicios/FuncionesApi.ts";
import {useNavigate} from "react-router-dom";

interface UserFormProps {
    onSubmit: (data: { nombreUsuario: string; clave: string; rol: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = { nombreUsuario: username, clave: password, rol: role };
        try {
            const response = await sendUserData(formData);
            console.log('Respuesta del servidor:', response);
            onSubmit(formData);
            navigate('/Menu');
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Clave:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="role">Rol:</label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default UserForm;

