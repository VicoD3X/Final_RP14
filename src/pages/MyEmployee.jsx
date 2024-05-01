import EmployeeList from "../components/EmployeeList";
import { Link } from 'react-router-dom'; // Importe le composant Link


function FormEmployee() {
    return (
        <>
            <div className="TableSuperContainer">
                <h1 className="TableTitle">Liste des employées</h1>
                <div className="navigation-links">
                    {/* Ajoute le lien vers la page Dashboard à gauche */}
                    <Link to="/dashboard" className="link-dashboard">Dashboard</Link>
                    {/* Ajoute le lien vers la page Liste des employés à droite */}
                    <Link to="/dashboard/MyEmployee" className="link-employee-list">Liste des employés</Link>
                </div>
                <EmployeeList />
            </div>
        </>
    );
}

export default FormEmployee;