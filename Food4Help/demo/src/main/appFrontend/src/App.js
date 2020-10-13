//import React from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
//import './App.css';
//import logo from './logo.svg';
//import { Typography, makeStyles, Box, Paper } from '@material-ui/core';
//import { useTheme } from '@material-ui/core/styles';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//

//function App() {
//  return (
//    <Button variant="contained" color="primary">
//      Hello World
//    </Button>
//  );
//}
//
//export default App;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './HP/Header';
import Photo from './HP/Photo';
import Main from './HP/Main';
import Sidebar from './HP/Sidebar';
import Footer from './HP/Footer';
import post1 from './HP/post1.md'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'About Us', url: '#' },
  { title: 'What we do', url: '#' },
  { title: 'Register Your Company', url: '#' },
  { title: 'Review', url: '#' },
];

const photo = {
  image: 'https://source.unsplash.com/random',
};

const posts=[post1]

const sidebar = {
  title: 'About',
  description:
    'We are a group of students that have the determination to help people around the world giving organizations the accesibility to get charity and hand it to those in need.',
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Food4Help" sections={sections} />
        <main>
          <Photo post={photo} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Main title="Posts from companies" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}