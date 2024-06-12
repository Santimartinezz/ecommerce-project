import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', { username, password });
            alert(response.data);
        } catch (error) {
            console.error(error);
            alert('Error al registrar el usuario');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
