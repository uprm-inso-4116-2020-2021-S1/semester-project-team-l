import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    small: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    header: {
      marginBottom: theme.spacing(5)
    },
    body: {
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(25),
      marginRight: theme.spacing(25),
    },
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
  { title: 'Companies Page', url: '/filter' },
  { title: 'User Profile', url: '/user' },
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
         <Typography variant="h5" component="div" className={classes.header}>
           Who are we?
        </Typography>
          <Typography variant="body1" paragraph={true} className={classes.body}>
              Currently, all of us are studying in the University of Puerto Rico in Mayaguez.
          We are a team of 5 members who are still learning and improving in the software and computer area that are working hard for our future. 
          This project is made by the purpose of designing a web application for a class trying to follow various models showed by the professor Marko Schutz.
          Also, creating a web application to help people who needed is a pleasure and excited to work. 
          All of us are humans and we wanted a better future for our generations and develop this project will be amazing for big things. 
          Indeed, has been difficult to work during this days because the plague but we have done sacrifices to make it possible 
          and of course hard work from all of us. We encourage who is reading this content to focus in their goals as we do
          and always try to help people around you to be an example to anyone who knows you or also to people who you do not know.
          </Typography>
        
        <AvatarGroup max={5}>
          <Avatar alt="John Robles" src="https://source.unsplash.com/random" className={classes.small}/>
          <Avatar alt="Anthony Rivera" src="https://source.unsplash.com/random" className={classes.small}/>
          <Avatar alt="Julian Ramos" src="https://source.unsplash.com/random" className={classes.small}/>
          <Avatar alt="Valerie Reyes" src="https://source.unsplash.com/random" className={classes.small}/>
          <Avatar alt="Kevin Burgos" src="https://source.unsplash.com/random" className={classes.small}/>
        </AvatarGroup>
      </div>
      </MuiThemeProvider>
    </Container>
    <Footer/>
    </React.Fragment>
  );
}