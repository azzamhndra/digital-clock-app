import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const leadingZero = (n) => String(n).padStart(2, '0');

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const merediem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(
      seconds
    )} ${merediem}`;
  };

  const formatDay = () => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return weekday[time.getDay()];
  };

  const formatFullDate = () => {
    const monthsName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${leadingZero(time.getDate())} ${
      monthsName[time.getMonth()]
    } ${time.getFullYear()}`;
  };

  return (
    <div className="clock-container">
      <p className="date">{formatFullDate().toUpperCase()}</p>
      <span className="clock">{formatTime()}</span>
      <p className="day">{formatDay().toUpperCase()}</p>
    </div>
  );
};

export default DigitalClock;
