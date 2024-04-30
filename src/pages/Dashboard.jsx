import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../App.css'

function Dashboard() {
  return (
    <div className="container">
      <div>
        <img src={logo} alt="Logo de l'entreprise" />
      </div>

      <h1 className='DashH1'>Votre tableau de bord</h1>
      <div className='DashAction'>
        <h2>Vos actions</h2>
        <div className="actions">
          <div className="DashLinkContainer">
            <Link to="/dashboard/FormEmployee" className="DashLink">Créer un nouvel employé</Link>
          </div>
          <div className="DashLinkContainer">
            <Link to="/dashboard/MyEmployee" className="DashLink">Voir la liste des employés</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
