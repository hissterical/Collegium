import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/expertise-marketplace">Expertise Marketplace</Link></li>
          <li><Link to="/equipment-marketplace">Equipment Marketplace</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;

