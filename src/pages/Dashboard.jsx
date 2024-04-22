import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h1>Votre tableau de bord</h1>
      <div>
        <h2>Actions disponible pour vous</h2>
        <div className="actions">
          <div>
            <Link to="/dashboard/FormEmployee">Créer un nouvel employé</Link>
          </div>
          <div>
            <Link to="/dashboard/MyEmployee">Voir la liste des employés</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
