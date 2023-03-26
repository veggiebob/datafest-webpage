import React, { Component } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import Conversation from './Conversation';
import { BehaviorSubject } from 'rxjs';
import { chatRequest } from './modelRequests';
import bart from './bartesquire.png';

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
          content: 'lets do this|*|line2'
      },
      {
          header: 'conversation4',
          content: 'this is a conversation'
      }
  ]);
      this.options = new BehaviorSubject({
        age: [0, 0],
        ethnicities: [],
        genders: [],
        states: [],
        categories: []
      });
  }

  componentDidMount() {
    this.inputState.subscribe(input => {
      if (input.length > 0) {
        // console.log({text: input, questionUno: this.pregen.value});
        chatRequest(input, this.inputIsPreGenerated.value, out => {
          this.conversations.next(out.recommendations.map(x => ({
            header: x.slice(0, 20),
            content: x
          })));
        }, console.error);
      }
    })
  }

  render() {
    return (
      <div>
        <div id="outer" className="bg-slate-700">
          <ChatWindow 
            callback={(input) => this.inputState.next(input)}
            pregenSubject={this.inputIsPreGenerated}
            promptSubject={this.promptState}
            optionsSubject={this.options}
            conversations={this.conversations}
            />
          <Conversation 
            inpSubject={this.inputState} 
            pregenSubject={this.inputIsPreGenerated}
            promptSubject={this.promptState}
            conversations={this.conversations}
            optionsSubject={this.options}
            />
            <img src={bart}></img>
        </div>
        <a href="/dash/index.html" style={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}>Supplementary Resources</a>
      </div>
    );
  }
}

export default App;
