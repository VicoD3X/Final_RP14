import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard'; // Assuming your Dashboard component is here
import FormEmployee from '../src/pages/FormEmployee';
import MyEmployee from '../src/pages/MyEmployee';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/FormEmployee" element={<FormEmployee />} />
          <Route path="/dashboard/MyEmployee" element={<MyEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
