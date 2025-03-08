import React from 'react';
import { Layout, Button } from 'antd';
import Pomofocus from './Components/Pomofocus';
import './App.css';

const App = () => {
  const { Header, Content } = Layout;
  return (
    <div className="App">
      <Header
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Button style={{ marginLeft: '30px' }}>Pomofocus</Button>
        <div>
          <Button style={{ marginRight: '5px' }}>Settings</Button>
          <Button style={{ marginRight: '30px' }}>Log In</Button>
        </div>
      </Header>
      <div className="content">
        <Content
          style={{
            padding: '24px',
            minHeight: '280px',
            width: '550px',
            transition: 'background-color 0.5s',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
          }}
        >
          <Pomofocus />
        </Content>
      </div>
    </div>
  );
};

export default App;
