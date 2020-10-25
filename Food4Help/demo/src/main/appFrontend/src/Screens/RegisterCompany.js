import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
  { title: 'Review', url: '/reviews' },
];

export default function RegisterCompany() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Register Your Company" sections={sections} />
      </Container>
      <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Company Registration
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
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
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                   <TextField
                     variant="outlined"
                     required
                     fullWidth
                     name="company name"
                     label="Company Name"
                     type="company name"
                     id="company name"
                   />
                 </Grid>
                 <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phone number"
                    label="Phone Number"
                    type="phone number"
                    id="phone number"
                   />
                  </Grid>
                 </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Register
                </Button>
              </form>
            </div>
          </Container>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}