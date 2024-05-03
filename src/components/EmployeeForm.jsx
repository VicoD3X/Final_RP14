import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesSlices';
import '../App.css';
import Popup from '@vicod3x/popup_package';

function EmployeeForm() {
    const dispatch = useDispatch(); // Accès à la fonction dispatch pour envoyer des actions Redux.
    const initialEmployeeState = {
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    };

    // État local pour gérer les données du formulaire.
    const [employee, setEmployee] = useState(initialEmployeeState);

    const [showPopup, setShowPopup] = useState(false);
    const timeoutRef = useRef(null);  // Référence pour gérer le timer pour fermer automatiquement le popup.

    // Met à jour l'état 'employee' à chaque changement de champ.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employee saved:', employee);
        dispatch(addEmployee(employee)); // Envoie l'employé ajouté au store Redux.
        setEmployee(initialEmployeeState); // Réinitialise le formulaire après la soumission.
        setShowPopup(true);

        // Gestion du timer pour fermer le popup
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    // Fonction pour fermer le popup + clean du timer.
    const closePopup = () => {
        setShowPopup(false);
        clearTimeout(timeoutRef.current);
    };


    return (
        <>

            <form onSubmit={handleSubmit} className="FormContainer">
                <div>
                    <label className="FormLabel">Prénom:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Nom:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Date de naissance:</label>
                    <input
                        className="FormInput"
                        type="date"
                        name="birthDate"
                        value={employee.birthDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Date de début:</label>
                    <input
                        className="FormInput"
                        type="date"
                        name="startDate"
                        value={employee.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Rue:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="street"
                        value={employee.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Ville:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="city"
                        value={employee.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">État:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="state"
                        value={employee.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Code postal:</label>
                    <input
                        className="FormInput"
                        type="text"
                        name="zipCode"
                        value={employee.zipCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="FormLabel">Département:</label>
                    <div className="FormSelectContainer">
                        <select
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                            required
                            className="FormSelect"
                        >
                            <option value="">Sélectionner</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Comptabilité">Comptabilité</option>
                            <option value="IT">IT</option>
                            <option value="RH">RH</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="FormButton">Enregistrer</button>
            </form>
            <Popup
                isOpen={showPopup}
                close={closePopup}
                content={<p>Nouvel employé crée !</p>}
            />
        </>
    );
}

export default EmployeeForm;
