// dashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h1>Votre tableau de bord</h1>
      <div>
        <h2>Actions disponible pour vous</h2>
        <ul>
          <li>
            <Link to="/dashboard/NewEmployee">Créer un nouvel employé</Link>
          </li>
          <li>
            <Link to="/dashboard/ListOfEmployee">Voir la liste des employés</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
