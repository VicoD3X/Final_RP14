import React from 'react';
import { Link } from 'react-router-dom'; // Importe le composant Link
import EmployeeForm from "../components/EmployeeForm";

function FormEmployee() {
    return (
        <>
            <div className="FormSuperContainer">
                <h1 className="FormTitle">NOUVEL EMPLOYÉ</h1>
                <div className="navigation-links">
                    {/* Ajoute le lien vers la page Dashboard à gauche */}
                    <Link to="/dashboard" className="link-dashboard">Dashboard</Link>
                    {/* Ajoute le lien vers la page Liste des employés à droite */}
                    <Link to="/dashboard/MyEmployee" className="link-employee-list">Liste des employés</Link>
                </div>
                <EmployeeForm />
            </div>
        </>
    );
}

export default FormEmployee;
