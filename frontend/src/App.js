import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ExpertiseMarketplace from './screens/ExpertiseMarketplace';
import EquipmentMarketplace from './screens/EquipmentMarketplace';
import EventManagement from './screens/EventManagement';
import SignUp from './screens/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expertise-marketplace" element={<ExpertiseMarketplace />} />
        <Route path="/equipment-marketplace" element={<EquipmentMarketplace />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
