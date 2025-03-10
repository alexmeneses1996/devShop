import React, { useState } from 'react';
import "../styles/Modal.css"; 

const users = [
    {
        id: "1",
        name: "Admin",
        email: "admin@freshPrince.com",
        password: "12345",
    },
];

export default function Modal({ close, content }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      alert(`Bienvenido, ${user.name}!`);
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="modal-back" onClick={close}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-title">Ingresar</h1>
        <button className="modal-close-btn" onClick={close}>X</button>

        {/* Inputs de usuario y contraseña */}
        <input
          className="modal-input"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="modal-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="modal-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="modal-error">{error}</p>}
        
        <button className="modal-login-btn" onClick={handleLogin}>
          Ingresar
        </button>
        
        {content}
      </div>
    </div>
  );
}