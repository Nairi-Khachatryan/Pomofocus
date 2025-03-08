import React from 'react';
import { Layout, Button } from 'antd';

import './App.css';
import Pomofocus from './Components/Pomofocus';

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <Header>
        <Button>Pomofocus</Button>
        <Button>Setings</Button>
        <Button>Log In</Button>
      </Header>
      <div className="content">
        <Content
          style={{
            padding: '24px',
            minHeight: '280px',
            width: '500px',
            transition: 'background-color 0.5s',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Pomofocus />
        </Content>
        <Content
          style={{
            padding: '24px',
            minHeight: '280px',
            width: '500px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <p>To Do</p>
        </Content>
      </div>
      <Footer />
    </div>
  );
};

export default App;
