import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    flexDirection: "column",
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpButton() {
  const classes = useStyles();

  return (
    <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
      <Button
        type="submit"
        variant="contained"
        align="center"
        color="primary"
        href="/signup"
        style={{
          margin:0,
          position:"absolute",
          top:"40%"
        }}
        className={classes.submit}
      >
        Go and Register
      </Button>
    </div>
  );
}
