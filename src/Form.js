import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName: "dog",
    lastName: "",
    email: "",
    feedback: "",
  };

  change = e => {
    this.setState({[e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    /*if (this.state.firstName==''||this.state.lastName==''||
    this.state.email==''||this.state.feedback=='') {
      alert('All fields required');
      return false;
    }*/
    if (this.handleValidation()){
      console.log(this.state);
      alert("Form submitted");
    }else{
      alert("You need to fill out all fields.")
    }
  }

  handleValidation(){
    var fName = this.state.firstName;
    var lName = this.state.lastName;
    var email = this.state.email;
    var feedback = this.state.feedback;
    var validForm = true;
    if (fName ==""||lName==""||email==""||feedback=="") {
      validForm = false;
    }
    return validForm
  }
  render() {
    return (
      <form>
        <input
          name = 'firstName'
          placeholder='First name'
          value = {this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = 'lastName'
          placeholder='Last name'
          value = {this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = 'email'
          placeholder='Email'
          value = {this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = 'feedback'
          placeholder='feedback'
          value = {this.state.feedback} onChange={e => e.target.value}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
