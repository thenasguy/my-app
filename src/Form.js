import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/Feedback';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.blue,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Feedback
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="First Name"
            label="First Name"
            name="First Name"
            autoComplete="First Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Last Name"
            label="Last Name"
            type="Last Name"
            id="Last Name"
            autoComplete="Last Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Email"
            label="John@example.com"
            type="Email"
            id="Email"
            autoComplete="Email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline={true}
            inputProps={{maxLength: 500}}
            name="Feedback"
            label="Message"
            type="Feedback"
            id="Feedback"
            autoComplete="Feedback"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item>
              <Link href='#' variant="body2">
                {"Questions? Email us."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
