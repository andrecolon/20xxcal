import React from "react";
import './YearlyCalendar.css';

function YearlyCalendar({ year }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateMonthDays = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(new Date(year, month, i));
    }

    // Fill empty spaces before the first day
    let emptyDays = Array(firstDay.getDay()).fill(null);

    return [...emptyDays, ...daysArray];
  };

  return (
    <div className="yearly-calendar">
      {months.map((month, index) => (
        <div key={index} className="month">
          <h3>{month} {year}</h3>
          <div className="days-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="day-header">{day}</div>
            ))}
            {generateMonthDays(index, year).map((date, i) => (
              <div key={i} className={`day ${date && date.toDateString() === new Date().toDateString() ? "today" : ""}`}>
                {date ? date.getDate() : ""}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default YearlyCalendar;
