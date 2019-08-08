import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

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
      <Container component="main" maxWidth="xs">
      <CssBaseline />
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
        <Button variant="contained" size='large' color='primary'onClick={e => this.onSubmit(e)}>Submit</Button>
      </form>
      <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"Call us at"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Email us @"}
              </Link>
            </Grid>
          </Grid>
       </Container>
    );
  }
}
