import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = "http://18.119.137.116/"; 

function App() {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const buscarPersona = async () => {
    try {
      const response = await axios.get(`${API_URL}/buscar?nombre=${nombre}`);
      setPersonas(response.data);
      setError('');
    } catch (error) {
      setPersonas([]);
      setError("Persona no encontrada");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Buscar Persona</h1>
        <input 
          type="text" 
          placeholder="Ingrese nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={buscarPersona}>Buscar</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <ul>
          {personas.map(persona => (
            <li key={persona.id}>
              {persona.nombre} {persona.apellido} - {persona.correo}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

export default App;
