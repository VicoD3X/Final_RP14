import React, { useState } from 'react';
import '../App.css'

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour sauvegarder les données, par exemple dans localStorage
    console.log('Employee saved:', employee);
    // Réinitialiser le formulaire ou faire d'autres actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom:</label>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nom:</label>
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date de naissance:</label>
        <input
          type="date"
          name="birthDate"
          value={employee.birthDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date de début:</label>
        <input
          type="date"
          name="startDate"
          value={employee.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Rue:</label>
        <input
          type="text"
          name="street"
          value={employee.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ville:</label>
        <input
          type="text"
          name="city"
          value={employee.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>État:</label>
        <input
          type="text"
          name="state"
          value={employee.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Code postal:</label>
        <input
          type="text"
          name="zipCode"
          value={employee.zipCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Département:</label>
        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Marketing">Marketing</option>
          <option value="Comptabilité">Comptabilité</option>
          <option value="IT">IT</option>
          <option value="RH">RH</option>
        </select>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default EmployeeForm;
