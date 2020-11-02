import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from '../HP/Header';
import Footer from '../HP/Footer';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#cfe8fc"
    }
  }
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    background: '#cfe8fc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#cfe8fc' ,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mainGrid: {
      marginTop: theme.spacing(3),
    },
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
];
export default function AboutUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Container maxWidth="lg">
      <MuiThemeProvider theme={themeLight}>
      <Header title="About Us" sections={sections} />
      <CssBaseline />
      <div className={classes.paper} >
         <Typography variant="body1" component="div" style={{ height: '100vh' }} >
          This is About Us official page.
        </Typography>
      </div>
      </MuiThemeProvider>
    </Container>
    <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}