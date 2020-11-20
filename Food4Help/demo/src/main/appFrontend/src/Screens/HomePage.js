import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../HP/Header';
import Photo from '../HP/Photo';
import Main from '../HP/Main';
import Sidebar from '../HP/Sidebar';
import Footer from '../HP/Footer';
import post1 from '../HP/post1.md'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
  { title: 'Companies Page', url: '/filter' },
  { title: 'User Profile', url: '/user' },
];

const photo = {
  image: 'https://source.unsplash.com/random',
};

const posts=[post1]

const sidebar = {
  title: 'About',
  description:
    'We are a group of students that have the determination to help people around the world giving organizations the accesibility to get charity and hand it to those in need.',

};

export default function HomePage() {
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
            />
            <Main title="Posts from companies" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}