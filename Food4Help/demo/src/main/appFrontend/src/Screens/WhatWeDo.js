import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
   paper: {
      marginTop: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  margin: {
    marginBottom: theme.spacing(5)
  },
}));

const sections = [
  { title: 'About Us', url: '/aboutus' },
  { title: 'Home Page', url: '/' },
  { title: 'Register Your Company', url: '/register' },
];

export default function WhatWeDo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="What We Do" sections={sections} />
        <div className={classes.paper} >
                 <Typography variant="h5"  component="div" className={classes.margin}>
                    What is our goal with the page?
                 </Typography>
                 <Typography variant="body1" component="div" style={{ height: '100vh' }} >
                 One of the factors that cause pollution and climate change is the food waste.
                 While food waste can happen in individuals housegolds it not as big as done by corporations.
                 Our goal with Food4Help is to create and give an interface where companies can communicate about
                 their consumable food that they can give out to charity. That way the page can work as a medium.
                 For charity organizations find and communicate with companies, supermarkets and fastfoods that are willing
                 to help share their food instead of letting it to waste.

                </Typography>
        </div>
      </Container>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}