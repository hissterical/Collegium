import React, { useState } from "react";
import { Calendar as BigCalendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "CS101: Data Structures Lecture",
      start: new Date(2024, 11, 22, 10, 0), // Dec 22, 2024, 10:00 AM
      end: new Date(2024, 11, 22, 11, 30),
      allDay: false,
      type: "academic",
    },
    {
      id: 2,
      title: "Photography Club Meetup",
      start: new Date(2024, 11, 23, 14, 0), // Dec 23, 2024, 2:00 PM
      end: new Date(2024, 11, 23, 15, 30),
      allDay: false,
      type: "club",
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { start, end, title, allDay: false }]);
    }
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = event.type === "academic" ? "blue" : "green";
    return {
      style: {
        backgroundColor,
        color: "white",
        borderRadius: "5px",
        padding: "5px",
      },
    };
  };

  return (
    <div className="calendar-page">
      <h1>College Calendar</h1>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "20px" }}
        selectable
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        defaultView={Views.MONTH}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        popup
      />
    </div>
  );
};

export default CalendarPage;
