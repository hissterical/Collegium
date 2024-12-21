import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  // State for dynamic data
  const [notifications, setNotifications] = useState([]);
  const [highlights, setHighlights] = useState({});
  const [quickLinks, setQuickLinks] = useState([
    { title: "Knowledge Marketplace", action: "Go to Knowledge Marketplace" },
    { title: "Equipment Marketplace", action: "Go to Equipment Marketplace" },
    { title: "Today's Timetable", action: "View Today's Timetable" },
    { title: "Upcoming Events", action: "Check Upcoming Events" },
  ]);

  // Mock API call to fetch data
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const mockNotifications = [
        "Event registration confirmed for Hackathon.",
        "Payment received for your listed book.",
        "New message from Alex regarding tutoring.",
      ];
      const mockHighlights = {
        recentTransactions: "₹1500 spent on equipment.",
        activitySummary: "3 sessions booked, 2 items sold.",
      };

      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setNotifications(mockNotifications);
      setHighlights(mockHighlights);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div
          className="profile-avatar"
          onClick={() => alert("Redirect to Profile Settings")}
        >
          <img src="https://via.placeholder.com/40" alt="Profile" />
        </div>
        <div className="notifications">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">{notifications.length}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Quick Links Section */}
        <section className="quick-links">
          <h2>Quick Links</h2>
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="card"
              onClick={() => alert(link.action)}
            >
              {link.title}
            </div>
          ))}
        </section>

        {/* Highlights and Insights */}
        <section className="highlights">
          <h2>Highlights</h2>
          <p>Recent Transactions: {highlights.recentTransactions}</p>
          <p>Activity Summary: {highlights.activitySummary}</p>
        </section>

        {/* Notifications Panel */}
        <section className="notifications-panel">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
          <button onClick={() => alert("View All Notifications")}>
            View All
          </button>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="bottom-nav">
        <button onClick={() => alert("Go to Home")}>🏠 Dashboard</button>
        <button onClick={() => alert("Go to Marketplace")}>
          📦 Marketplace
        </button>
        <button onClick={() => alert("Open Calendar")}>📅 Calendar</button>
        <button onClick={() => alert("Go to Chats")}>💬 Chats</button>
      </footer>
    </div>
  );
}

export default Dashboard;
