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
}));

const sections = [
  { title: 'About Us', url: '/aboutus' },
  { title: 'Home Page', url: '/' },
  { title: 'Register Your Company', url: '/register' },
  { title: 'Review', url: '/reviews' },
];

export default function WhatWeDo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="What We Do" sections={sections} />
        <div className={classes.paper} >
                 <Typography variant="body1" component="div" style={{ height: '100vh' }} >
                  This is What We Do official page.
                </Typography>
        </div>
      </Container>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}