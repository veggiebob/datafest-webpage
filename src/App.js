import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import ChatWindow from './ChatWindow';
import Conversation from './Conversation';
import PromptParams from './PromptParams';

class App extends Component {
  constructor(props) {
    super(props);
    this.conversation = new Conversation({});
    this.chatWindow = new ChatWindow({
      callback: (input) => this.conversation.updateConversations(input)
    });
  }
  render() {
    return (
      <div className="App">
        {this.chatWindow.render()}
        {this.conversation.render()}
      </div>
    );
  }
}

export default App;
