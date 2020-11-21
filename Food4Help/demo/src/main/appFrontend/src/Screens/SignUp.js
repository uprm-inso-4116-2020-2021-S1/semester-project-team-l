import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Select from "react-select";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [category, setCategory] = useState(null);
  const history = useHistory();

  const register = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8080/sign-up",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        companyName: companyName,
        phoneNumber: phoneNumber,
        category: category,
      },
    }).then((response) => {
      if (response.data) {
        history.push("/login");
        console.log(response.data);
      }
    });
    console.log("Submited");
  };

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
        <form
          className={classes.form}
          action="@{/sign-up}"
          method="post"
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={firstName}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                type="text"
                onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={companyName}
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
                name="company name"
                label="Company Name"
                type="company name"
                id="company name"
                autoComplete="cname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={phoneNumber}
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phone number"
                label="Phone Number"
                type="phone number"
                id="phone number"
                autoComplete="phone"
              />
            </Grid>
            {/* <Grid item xs={12}>
                    <TextField
                     variant="outlined"
                     required
                     fullWidth
                     name="category"
                     label="Category"
                     type="category"
                     id="category"
                     autoComplete="cat"
                     />
                  </Grid> */}
            {/* <select value={users.category} onChange={handleChange}>
                    <option value={users.category}>Supermarket</option>
                    <option value={users.category}>Fast-Food</option>
                    <option value={users.category}>Restaurant</option>
                  </select> */}
            {/* <Select value={category} onChange={handleChangeSelect} options={options}/> */}
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
            href="#"
            onClick={() => {
              register();
              console.log(firstName);
              console.log(lastName);
              console.log(email);
              console.log(password);
              console.log(companyName);
            }}
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
