import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeesSlices';
import '../App.css';
import Popup from '@vicod3x/popup_package';

function EmployeeForm() {
    const dispatch = useDispatch();
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
    const [employee, setEmployee] = useState(initialEmployeeState);

    const [showPopup, setShowPopup] = useState(false);
    const timeoutRef = useRef(null); // useRef pour gérer le timer

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
        dispatch(addEmployee(employee));
        setEmployee(initialEmployeeState); // Réinitialiser l'état du formulaire
        setShowPopup(true);

        // Gestion du timer pour fermer le popup
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

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
                        pattern="[A-Za-zÀ-ÿ -]*"
                        title="Le prénom ne doit contenir que des lettres, des espaces et des tirets."
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
                        pattern="[A-Za-zÀ-ÿ -]*"
                        title="Le nom ne doit contenir que des lettres, des espaces et des tirets."
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
                        pattern="[A-Za-z0-9À-ÿ -]*"
                        title="La rue ne doit contenir que des lettres, des chiffres, des espaces et des tirets."
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
                        pattern="[A-Za-zÀ-ÿ -]*"
                        title="La ville ne doit contenir que des lettres, des espaces et des tirets."
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
                        pattern="[A-Za-zÀ-ÿ -]*"
                        title="L'état ne doit contenir que des lettres, des espaces et des tirets."
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
                        pattern="[0-9]{5}"
                        title="Le code postal doit contenir exactement 5 chiffres."
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
                content={<p>Nouvelle employée créée !</p>}
            />
        </>
    );
}

export default EmployeeForm;
