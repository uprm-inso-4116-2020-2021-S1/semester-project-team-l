import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

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
  const [userID, setUserID] = useState(null);
  const { title } = props;
  const [sections, setSections] = useState([]);
  const history = useHistory();
  const [active, setActive ] = useState(false);


  const checkActive = () => {
    if(Cookies.get("LoggedIn") === "true"){
      setActive(true);
    }
  }

  const checkUser = () => {
    if(!Cookies.get("User") === ""){
      setUserID(Cookies.get("User"))
    }
  }

  const loadSections = () => {
    setSections(props.sections);
  }

  useEffect(() => {
    checkActive();
    checkUser();
    loadSections();
  }, [active])

  const signIn = () => {
    history.push("/login");
  };


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
        {active ? (
          <div>
            <Typography>{userID}</Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                Cookies.set("LoggedIn", "false");
                Cookies.set("User", "");
                setActive(false);
                history.push("/")
                window.location.reload();
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
            <Button
              onClick={() => {
                signIn();
              }}
              variant="outlined"
              size="small"
            >
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
  auth: PropTypes.bool,
};
