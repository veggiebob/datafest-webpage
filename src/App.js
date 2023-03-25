import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import ChatWindow from './ChatWindow';
import Conversation from './Conversation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatWindow />
        <Conversation />  
      </div>
    );
  }
}

export default App;
