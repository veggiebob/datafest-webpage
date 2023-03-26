import React, { Component } from "react";
import Input from "./Input";
import './App.css';
import './ChatWindow.css';
import PromptParams from "./PromptParams";
import { chatRequest } from "./modelRequests";

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.callback = props.callback;
        this.pregen = props.pregenSubject;
        this.prompt = props.promptSubject;
        this.state = {
          content: []
        };
    }

    render() {
      const breakline = '\u000A';
        return (
          <div id='widget'>
            <div id='user-input'>
            <Input
              promptSubject={this.prompt} 
              pregen={this.pregen}
              callback={(input) => {
                this.callback(input);
                this.setState({
                  content: [input].concat(this.state.content)
                })
              }}/>

              </div>

            <div id="model-output">
              {this.state.content.map(x => (
                <div style={{marginBottom:"10px"}}>
                  {x}
                  </div>
              ))}
            </div>
          </div>
        );
    }
}

export default ChatWindow;