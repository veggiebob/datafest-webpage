import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import Conversation from './Conversation';
import { BehaviorSubject } from 'rxjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputState = new BehaviorSubject("");
  }
  render() {
    return (
      <div className="App">
        <Conversation inpSubject={this.inputState}/>
        <ChatWindow 
          callback={(input) => this.inputState.next(input)}/>
      </div>
    );
  }
}

export default App;
