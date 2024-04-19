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
        // Vérification des données avec les regex ici

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
                    pattern="[A-Za-zÀ-ÿ -]*"
                    title="Le prénom ne doit contenir que des lettres, des espaces et des tirets."
                    required
                />
            </div>
            <div>
                <label>Nom:</label>
                <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÿ -]*"
                    title="Le nom ne doit contenir que des lettres, des espaces et des tirets."
                    required
                />
            </div>
            <div>
                <label>Date de naissance:</label>
                <input
                    type="date"
                    name="birthDate"
                    value={employee.birthDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date de début:</label>
                <input
                    type="date"
                    name="startDate"
                    value={employee.startDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Rue:</label>
                <input
                    type="text"
                    name="street"
                    value={employee.street}
                    onChange={handleChange}
                    pattern="[A-Za-z0-9À-ÿ -]*"
                    title="La rue ne doit contenir que des lettres, des chiffres, des espaces et des tirets."
                    required
                />
            </div>
            <div>
                <label>Ville:</label>
                <input
                    type="text"
                    name="city"
                    value={employee.city}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÿ -]*"
                    title="La ville ne doit contenir que des lettres, des espaces et des tirets."
                    required
                />
            </div>
            <div>
                <label>État:</label>
                <input
                    type="text"
                    name="state"
                    value={employee.state}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÿ -]*"
                    title="L'état ne doit contenir que des lettres, des espaces et des tirets."
                    required
                />
            </div>
            <div>
                <label>Code postal:</label>
                <input
                    type="text"
                    name="zipCode"
                    value={employee.zipCode}
                    onChange={handleChange}
                    pattern="[0-9]{5}"
                    title="Le code postal doit contenir exactement 5 chiffres."
                    required
                />
            </div>
            <div>
                <label>Département:</label>
                <select
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    required
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
