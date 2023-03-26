import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import Conversation from './Conversation';
import { BehaviorSubject } from 'rxjs';
import { chatRequest } from './modelRequests';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputState = new BehaviorSubject("");
    this.promptState = new BehaviorSubject(""); // contains prompt text
    this.inputIsPreGenerated = new BehaviorSubject(null); // null if no, else an ID
    this.conversations = new BehaviorSubject([
      {
          header: 'conversation',
          content: 'conversation A!'
      },
      {
          header: 'conversation2',
          content: 'hello world'
      },
      {
          header: 'conversation3',
          content: 'lets do this'
      },
      {
          header: 'conversation4',
          content: 'this is a conversation'
      }
  ]);
  }

  componentDidMount() {
    this.inputState.subscribe(input => {
      if (input.length > 0) {
        // console.log({text: input, questionUno: this.pregen.value});
        chatRequest(input, this.inputIsPreGenerated.value, out => {
          this.conversations.next(out.recommendations.map(x => ({
            header: x.slice(0, 20),
            content: x.split("|*|").join("\n")
          })));
        }, console.error);
      }
    })
  }

  render() {
    return (
      <div id="outer" className="bg-slate-700">
        <ChatWindow 
          callback={(input) => this.inputState.next(input)}
          pregenSubject={this.inputIsPreGenerated}
          promptSubject={this.promptState}/>
        <Conversation 
          inpSubject={this.inputState} 
          pregenSubject={this.inputIsPreGenerated}
          promptSubject={this.promptState}
          conversations={this.conversations}
          />
      </div>
    );
  }
}

export default App;
