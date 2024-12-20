import React from 'react';

const EventManagement = () => {
  const events = [
    { title: 'Coding Club Meetup', date: '2024-12-22' },
    { title: 'Art Club Exhibition', date: '2024-12-25' },
  ];

  return (
    <div>
      <h1>Event Management</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.date} 
            <button onClick={() => alert(`Registered for ${event.title}`)}>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;

