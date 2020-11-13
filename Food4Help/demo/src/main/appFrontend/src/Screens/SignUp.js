import React, {useState, useEffect, Component, useCallback, useReducer, formReducer} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

   const [users, setUsers] = useState({
           firstName: '',
           lastName: '',
           email: '',
           password: ''
       });
       const [submitted, setSubmitted] = useState(false);
       const { firstName, lastName, email, password } = users;

       // reset login status
  //     useEffect(() => {
  //         dispatch(userActions.logout());
  //     }, []);

       function handleChange(e) {
           const { name, value } = e.target;
           setUsers(users => ({ ...users, [name]: value }));
       }
//
//       useEffect(() => {
//          console.log("first name: "+ firstName)
//          console.log("last name: "+lastName)
//          console.log("email: "+email)
//          console.log("password: "+password)
//       }, [setSubmitted]);

       useEffect(() => {

                 console.log("first name: "+ firstName)

       }, [setUsers]);

       function handleSubmit(e) {
           e.preventDefault();

           setSubmitted(true);
           if (users.firstName && users.lastName && users.email && users.password) {
               // get return url from location state or default to home page
  //             const { from } = location.state || { from: { pathname: "/" } };
  //             dispatch(userActions.login(username, password, from));
               axios({method: 'post',
                             url:'http://localhost:8080/sign-up',
                             data: {
                                 firstName: users.firstName,
                                            lastName: users.lastName,
                                            email: users.email,
                                            password: users.password}}).then((response) => {
                                  this.setUsers(response.data)
                                  console.log(response);},
                                  (error) => {
                                  console.log("Error");
                                  });
              console.log("Se submitio la persona")
           }
       }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} action="@{/sign-up}" method="post" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            value= {users.firstName}
                            type='text'
                            onChange={handleChange}
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            autoComplete="fname"
                          />
                        </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value= {users.lastName}
                type='text'
                onChange={handleChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value= {users.email}
                type='text'
                onChange={handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value= {users.password}
                type='text'
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href="/"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}