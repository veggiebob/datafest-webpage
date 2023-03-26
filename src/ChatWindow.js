import React, { Component } from "react";
import Input from "./Input";
import "./App.css";
import "./ChatWindow.css";
import PromptParams from "./PromptParams";
import { chatRequest, pickClientPromptRequest } from "./modelRequests";

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.callback = props.callback;
    this.pregen = props.pregenSubject;
    this.prompt = props.promptSubject;
    this.options = props.optionsSubject;
    this.conversations = props.conversations;
    this.state = {
      content: [],
    };
    this.updatePrompt = this.updatePrompt.bind(this);
  }

  updatePrompt(options) {
    // console.log('updating prompt with')
    // console.log(options);
    pickClientPromptRequest(
      options,
      (data) => {
        // deal with data format here
        // console.log(data);
        let prompt = "No prompts match this query!";
        if (data.success) {
          prompt = "Question ID " + data.questionUno + ": " + data.text;
          // console.log(
            // "logging. prompt=" + this.prompt + " pregen=" + this.pregen
          // );
          this.prompt.next(data.text);
          this.pregen.next(data.questionUno);
        }
        // this.setState(
        //   {
        //     prompt: prompt,
        //     conversations: this.state.conversations,
        //     content: this.state.content,
        //   },
        //   () => {
        //     // console.log("state has been set!");
        //     // console.log(this.state)
        //   }
        // );
        
        // this.clickTab(0);
      },
      console.error
    );
  }

  componentDidMount() {
    this.options.subscribe(this.updatePrompt);
  }

  render() {
    const breakline = "\u000A";
    return (
      <div id="widget">
        <div id="user-input">
          <Input
            promptSubject={this.prompt}
            pregen={this.pregen}
            callback={(input) => {
              this.callback(input);
              this.setState({
                content: [input],
              });
            }}
          />
        </div>
        <div id="window">
          <PromptParams optionsSubject={this.options} />
          <button
            type="button"
            onClick={() => this.updatePrompt(this.options.value)}
          >
            Randomize 🎲
          </button>
        </div>
        <div id="model-output">
          {this.state.content.map((x) => (
            <div style={{ marginBottom: "10px" }}>{x}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChatWindow;
