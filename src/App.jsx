import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlideTransition from './features/SlideTransition';
import Dashboard from '../src/pages/Dashboard';
import FormEmployee from '../src/pages/FormEmployee';
import MyEmployee from '../src/pages/MyEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={
          <SlideTransition>
            <Dashboard />
          </SlideTransition>
        } />
        <Route path="/dashboard/FormEmployee" element={
          <SlideTransition>
            <FormEmployee />
          </SlideTransition>
        } />
        <Route path="/dashboard/MyEmployee" element={
          <SlideTransition>
            <MyEmployee />
          </SlideTransition>
        } />
      </Routes>
    </Router>
  );
}

export default App;
