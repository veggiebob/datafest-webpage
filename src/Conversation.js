import React, { Component } from 'react';
import './Conversation.css';
import './App.css';
class Conversation extends Component {
    
    constructor(props) {
        super(props);
        /*
        format:
        {
            header: string,
            content: string
        }
        */
        this.state = {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dignissim purus, ut pretium dui. Etiam lobortis ultrices sodales. Etiam orci nulla, lacinia vel dui ultrices, tempor varius est. Donec commodo velit eu mi maximus mollis. Vivamus finibus orci maximus augue molestie, quis elementum ligula condimentum. Integer id hendrerit ipsum. Sed finibus dui ac imperdiet tempus. Nullam sit amet sagittis arcu, mattis posuere risus. In consequat efficitur augue eget pulvinar. Proin fringilla, urna id molestie facilisis, massa mauris sollicitudin massa, in convallis purus sem non metus. Etiam suscipit velit ut pretium iaculis. Nulla sed nisl dolor. Pellentesque aliquam sem non tortor finibus commodo. Nam non egestas nisl. Nunc lorem tellus, lobortis pellentesque commodo vitae, elementum ac nibh.",
            conversations: [
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
            ]
        };

        this.clickTab = this.clickTab.bind(this);
    }

    clickTab (index) {
        this.setState({
            content: this.state.conversations[index].content,
            conversations: this.state.conversations
        });
    }

    render() {
        return (
            <div id="window">
                {
                    this.state.conversations.map((conv, idx) => (
                        <button type="button" onClick={(event) => this.clickTab(idx)}>
                            {conv.header}
                        </button>
                    ))
                }
                <div id="output" className="output-window">
                    {this.state.content}
                </div>
            </div>
        )
    }
}

export default Conversation;