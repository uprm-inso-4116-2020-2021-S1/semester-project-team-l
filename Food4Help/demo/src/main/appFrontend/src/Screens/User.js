import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Photo from '../HP/Photo';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
   root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(32),
      },
    },
}));

const photo = {
  image: 'https://source.unsplash.com/random',
};

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
];

export default function User() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="User Profile" sections={sections} />
      </Container>
      <div className={classes.root}>
           <Paper elevation={0} >
           <Photo post={photo} />
           </Paper>
         </div>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}