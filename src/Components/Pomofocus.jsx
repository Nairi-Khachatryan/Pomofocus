import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Timer from './Timer';
import './Pomofocus.css';
import './Timer.css';

const Pomofocus = () => {
  const [time, setTime] = useState(25 * 60 * 1000); // Храним длительность в миллисекундах
  const [deadline, setDeadline] = useState(Date.now() + time); // Конкретное время окончания
  const [color, setColor] = useState('rgb(186, 73, 73)');
  const [displayTime, setDisplayTime] = useState('25:00'); // Для отображения времени до старта
  const [showRealTime, setShowRealTime] = useState(false);

  // Форматирование времени в формате "минуты:секунды"
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    setDeadline(Date.now() + time);
  }, [time]);

  function handleFocus() {
    setShowRealTime(false);
    const newTime = 25 * 60 * 1000; // 25 минут
    setTime(newTime);
    setColor('rgb(186, 73, 73)');
    document.body.style.backgroundColor = 'rgb(186, 73, 73)';
    setDisplayTime(formatTime(newTime));
  }

  function handleShortBreak() {
    setShowRealTime(false);
    const newTime = 5 * 60 * 1000; // 5 минут
    setTime(newTime);
    setColor('rgb(56, 133, 138)');
    document.body.style.backgroundColor = 'rgb(56, 133, 138)';
    setDisplayTime(formatTime(newTime));
  }

  function handleLongBreak() {
    setShowRealTime(false);
    const newTime = 15 * 60 * 1000; // 15 минут
    setTime(newTime);
    setColor('rgb(57, 112, 151)');
    document.body.style.backgroundColor = 'rgb(57, 112, 151)';
    setDisplayTime(formatTime(newTime));
  }

  function handleStart() {
    setShowRealTime(true);
    setDeadline(Date.now() + time);
  }

  return (
    <div className="pomofocus">
      <div className="buttons-div">
        <Button
          onClick={handleFocus}
          style={{ width: '100px', height: '40px' }}
        >
          Pomodoro
        </Button>
        <Button
          onClick={handleShortBreak}
          style={{ width: '100px', height: '40px' }}
        >
          Short Break
        </Button>
        <Button
          onClick={handleLongBreak}
          style={{ width: '100px', height: '40px' }}
        >
          Long Break
        </Button>
      </div>
      <div className="count-div">
        {showRealTime ? (
          <Timer deadline={deadline} />
        ) : (
          <h2 style={{ color: 'white', fontSize: '5rem' }}>{displayTime}</h2>
        )}
      </div>
      <Button onClick={handleStart} style={{ width: '200px', height: '40px' }}>
        Start
      </Button>
    </div>
  );
};

export default Pomofocus;
