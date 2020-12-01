import React, { useState } from "react";
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
  select: {
    width: "97%",
    marginLeft: theme.spacing(1),
    zIndex: 9999
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [entity, setEntity] = useState(false);
  const [category, setCategory] = useState(null);
  const history = useHistory();
  const companyOptions = [
    { value: "supermarket", label: "Supermarket" },
    { value: "restaurant", label: "Restaurant" },
    { value: "fastfood", label: "Fast-Food" },
  ];
  const entityOptions = [
    { value: "company", label: "Company" },
    { value: "organization", label: "Organization" },
  ];

  const addComp = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8080/api/comps/add", data: {name: companyName}})
      .then((response) => {
        if(response.data){
          console.log(response.data)
        }
      })
  }
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
        entity: category,
        organization: entity,
        phoneNumber: phoneNumber,
      },
    }).then((response) => {
      if (response.data) {
        history.push("/login");
      }
    });
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Select
              onChange={(e) => {
                if(e.value === "organization"){
                  setEntity(true);
                }
                else{
                  setEntity(false);
                }
              }}
              className={classes.select}
              options={entityOptions}
            />
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
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phone number"
                label="Phone Number"
                id="phone number"
                autoComplete="phone"
              />
            </Grid>
                  
              {!entity ?(
              <div className={classes.select}>
              <Select
              onChange={(e) => setCategory(e.value)}
              className={classes.select}
              options={companyOptions}/>
              </div>):
              (<div></div>)
              }
              
              
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
              addComp();
              register();
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
