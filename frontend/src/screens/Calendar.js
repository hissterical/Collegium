import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => setDate(newDate);

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarScreen;

