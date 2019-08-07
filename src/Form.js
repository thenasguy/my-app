import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName: "dog",
    lastName: "",
    email: "",
    feedback: "",
  }
  render() {
    return (
      <form>
        <input placeholder='First name' value = {this.state.firstName}
          onChange={e => this.setState({firstName: e.target.value})}/>
        <input placeholder='Last name' value = {this.state.lastName}
          onChange={e => this.setState({lastName: e.target.value})}/>
        <input placeholder='Email' value = {this.state.email}
          onChange={e => this.setState({email: e.target.value})}/>
        <input placeholder='feedback' value = {this.state.feedback} onChange={e => e.target.value}
          onChange={e => this.setState({feedback: e.target.feedback})}/>
      </form>
    )
  }
}
