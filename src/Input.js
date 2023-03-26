import React, { Component } from 'react';
import './Input.css';
import { chatRequest } from './modelRequests.js'
class Input extends Component {
    constructor(props) {
      super(props);
      this.callback = props.callback;
      this.prompt = props.promptSubject;
      this.pregen = props.pregen;
      this.state = {value: '', qID: null};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.pregen.next(null);
        this.setState({value: event.target.value, qID: this.state.qID});
    }
    
    handleSubmit(event) {
      event.preventDefault();
      // console.log("Send request to server");
      this.callback(this.state.value);
    }

    componentDidMount() {
      this.prompt.subscribe(prompt => {
        this.setState({
          value: prompt,
          qID: this.state.qID
        })
      });
      this.pregen.subscribe(id => {
        this.setState({
          value: this.state.value,
          qID: id
        })
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            <input id='input-field' type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input id='input-submit' type="submit" value="Submit" />
            <br/>
            {this.pregen.value === null ? (<span>🧠</span>) : (<span>preloaded prompt</span>)}
        </form>
      );
    }
  }

  export default Input;