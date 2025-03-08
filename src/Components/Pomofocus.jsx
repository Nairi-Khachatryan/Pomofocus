import React from 'react';
import { Button } from 'antd';
import './Pomofocus.css'

const Pomofocus = () => {
  return (
    <div className='pomofocus' >
      <div className='buttons-div' >
        <Button>Pomodoro</Button>
        <Button>Short Break</Button>
        <Button>Long Break</Button>
      </div>
      <h1 className='count' >00:00</h1>
      <Button>Start</Button>
    </div>
  );
};

export default Pomofocus;
