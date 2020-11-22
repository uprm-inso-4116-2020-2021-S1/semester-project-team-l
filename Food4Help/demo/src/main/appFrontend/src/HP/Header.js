import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  const [ID, setID] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { sections, title } = props;
  const [tick, setTick] = useState(false);

  const fetchData = async () => {
    let id = null;
    await axios({
      method: "GET",
      url: "http://localhost:8080/getStatus",
    }).then((response) => {
      if (response.data) {
        setLoggedIn(response.data);
      }
    });
    await axios({
      method: "GET",
      url: "http://localhost:8080/getUser",
    }).then((response) => {
      if (response.data) {
        setID(response.data);
        id = response.data
        console.log(id)
      }
    });
    await axios({
      method: "GET",
      url: "http://localhost:8080/user/"+ id
    }).then((response) => {
      if (response.data) {
        setCurrentUser(response.data);
        console.log(response.data)
      }
    });
    await axios({
      method: "PUT",
      url: "http://localhost:8080/updateStatus",
      params: {
        status: loggedIn,
      }
    }).then((response) => {
      if (response.data) {
        setLoggedIn(response.data);
      }
    });
  };

  useEffect(() => {
    fetchData();
  },[tick])

  const forceUpdate = () =>{
    setTick(!tick)
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button href="/" variant="outlined" size="small">
          Home
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {loggedIn ? (
          <div>
            <Typography>{ID}</Typography>
            <Button
              href="/"
              variant="outlined"
              size="small"
              onClick={() => {
                forceUpdate();
                setLoggedIn(false);
              }}
            >
              Log out
            </Button>
          </div>
        ) : (
          <div>
            <Button href="/signup" variant="outlined" size="small">
              Sign Up
            </Button>
            <Button href="/login" variant="outlined" size="small">
              Sign In
            </Button>
          </div>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
