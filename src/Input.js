import React, { Component } from 'react';
import './Input.css';
import { chatRequest } from './modelRequests.js'
class Input extends Component {
    constructor(props) {
      super(props);
      this.callback = props.callback;
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      event.preventDefault();
      console.log("Send request to server");
      this.callback(this.state.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            <input id='input-field' type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          <input id='input-submit' type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Input;