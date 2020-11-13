import React, {useState, useEffect, Component, useCallback, useReducer, formReducer} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
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

export default function Login() {
  const classes = useStyles();

 const [inputs, setInputs] = useState({
         email: '',
         password: ''
     });
     const [submitted, setSubmitted] = useState(false);
     const { email, password } = inputs;

     // reset login status
//     useEffect(() => {
//         dispatch(userActions.logout());
//     }, []);

     function handleChange(e) {
         const { name, value } = e.target;
         setInputs(inputs => ({ ...inputs, [name]: value }));
     }

     useEffect(() => {

        console.log("Se submitio la persona")
        console.log("email: "+inputs.email)
        console.log("password: "+inputs.password)
     }, [setSubmitted]);

     function handleSubmit(e) {
         e.preventDefault();

         setSubmitted(true);
//         if (email && password) {
//             // get return url from location state or default to home page
////             const { from } = location.state || { from: { pathname: "/" } };
////             dispatch(userActions.login(username, password, from));
//            console.log("Se submitio la persona")
//         }
     }

   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} action="@{/sign-in}" method="post" onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value= {inputs.email}
            type='text'
            onChange={handleChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value= {inputs.password}
            type='text'
            onChange={handleChange}
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            autoFocus
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href="/"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}