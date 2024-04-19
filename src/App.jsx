import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard'; // Assuming your Dashboard component is here
import EmployeeForm from '../src/components/EmployeeForm';
import EmployeeList from '../src/components/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/NewEmployee" element={<EmployeeForm />} />
        <Route path="/dashboard/ListOfEmployee" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
