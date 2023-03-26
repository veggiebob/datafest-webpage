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
        this.state = {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dignissim purus, ut pretium dui. Etiam lobortis ultrices sodales. Etiam orci nulla, lacinia vel dui ultrices, tempor varius est. Donec commodo velit eu mi maximus mollis. Vivamus finibus orci maximus augue molestie, quis elementum ligula condimentum. Integer id hendrerit ipsum. Sed finibus dui ac imperdiet tempus. Nullam sit amet sagittis arcu, mattis posuere risus. In consequat efficitur augue eget pulvinar. Proin fringilla, urna id molestie facilisis, massa mauris sollicitudin massa, in convallis purus sem non metus. Etiam suscipit velit ut pretium iaculis. Nulla sed nisl dolor. Pellentesque aliquam sem non tortor finibus commodo. Nam non egestas nisl. Nunc lorem tellus, lobortis pellentesque commodo vitae, elementum ac nibh."
        };
    }

    render() {
        return (
          <div id='widget'>
            <div id="model-output">
              {this.state.content}
            </div>
            <Input callback={(input) => {
                this.callback(input);
                if (input.length >  0) {
                  console.log("input is " + input);
                  chatRequest(input, out => this.setState({ content: out }), console.error);
                }
              }}/>
          </div>
        );
    }
}

export default ChatWindow;