import React, { useState } from "react";
import "../styles/EventManagement.css"; // Create and style this file

const EventManagement = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "AI Hackathon",
      description: "Learn and build with AI.",
      location: "Auditorium",
      datetime: "2024-12-23 10:00 AM",
      organizer: "Tech Club",
      type: "academic",
      registered: true,
    },
    {
      id: 2,
      name: "Music Fest",
      description: "Join us for an evening of live music.",
      location: "Main Hall",
      datetime: "2024-12-25 6:00 PM",
      organizer: "Cultural Club",
      type: "club",
      registered: false,
    },
  ]);

  const registerEvent = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, registered: true } : event
      )
    );
  };

  return (
    <div className="event-management-container">
      <h1>Event Management</h1>
      <div className="events-list">
        {events.map((event) => (
          <div
            key={event.id}
            className={`event-card ${event.type}`}
            style={{
              borderColor: event.type === "academic" ? "blue" : "green",
            }}
          >
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Date/Time:</strong> {event.datetime}
            </p>
            <p>
              <strong>Organizer:</strong> {event.organizer}
            </p>
            {event.registered ? (
              <button className="registered-btn" disabled>
                Registered
              </button>
            ) : (
              <button
                className="register-btn"
                onClick={() => registerEvent(event.id)}
              >
                Register
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventManagement;
