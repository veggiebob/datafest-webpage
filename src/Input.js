import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
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