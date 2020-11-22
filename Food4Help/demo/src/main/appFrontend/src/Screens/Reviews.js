import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    marginTop: theme.spacing(5),
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
    small: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    large: {
      width: theme.spacing(35),
      height: theme.spacing(35)
    },
    headerReview: {
      direction: "row",
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3),
      alignItems: "center",
      alingContent: "center"
    },
    companyGrid: {
      direction: "column",
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3),
      alignItems: "center",
      alingContent: "center",
      marginBottom: theme.spacing(10)
    },
    typoCompany: {
      marginLeft: theme.spacing(3),
    },
    typoName: {
      marginLeft: theme.spacing(3)
    },
    typoTitle: {
      marginLeft: theme.spacing(3),
    },
    typoDescription: {
      marginLeft: theme.spacing(3),
      merginRight: theme.spacing(3)
    },
    starTitle: {
      direction: "row",
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3),
      alignItems: "flex-start",
      alingContent: "center",
    },
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Company Page', url: '/company' },
];

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Review" sections={sections} />
      </Container>
      <div className={classes.root}>
        <Grid container className={classes.companyGrid}>
        <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.large}/>
        <Typography variant="h4" className={classes.typoCompany}>
          Company Name
        </Typography>
        </Grid>
           <Paper elevation={4}>
             <Grid container className={classes.headerReview}>
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.small}/>
                <Typography className={classes.typoName}>Juan Del Pueblo</Typography>
              </Grid>
              <Grid container className={classes.starTitle}>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating
                  value={4}
                  name="rating"
                  readOnly="true"
                />
              </Box>
              <Typography className={classes.typoTitle}>Great Experience!!</Typography>
              </Grid>
              <Typography className={classes.typoDescription}>
                The meeting was on time and the food was in a great state to charity. 
                I hope we can have more food charity in the future.
              </Typography>
           </Paper>
           <Paper elevation={4}>
             <Grid container className={classes.headerReview}>
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.small}/>
                <Typography className={classes.typoName}>Juan Del Pueblo</Typography>
              </Grid>
              <Grid container className={classes.starTitle}>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating
                  value={4}
                  name="rating"
                  readOnly="true"
                />
              </Box>
              <Typography className={classes.typoTitle}>Great Experience!!</Typography>
              </Grid>
              <Typography className={classes.typoDescription}>
                The meeting was on time and the food was in a great state to charity. 
                I hope we can have more food charity in the future.
              </Typography>
           </Paper>
           <Paper elevation={4}>
             <Grid container className={classes.headerReview}>
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.small}/>
                <Typography className={classes.typoName}>Juan Del Pueblo</Typography>
              </Grid>
              <Grid container className={classes.starTitle}>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating
                  value={4}
                  name="rating"
                  readOnly="true"
                />
              </Box>
              <Typography className={classes.typoTitle}>Great Experience!!</Typography>
              </Grid>
              <Typography className={classes.typoDescription}>
                The meeting was on time and the food was in a great state to charity. 
                I hope we can have more food charity in the future.
              </Typography>
           </Paper>
           <Paper elevation={4}>
             <Grid container className={classes.headerReview}>
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.small}/>
                <Typography className={classes.typoName}>Juan Del Pueblo</Typography>
              </Grid>
              <Grid container className={classes.starTitle}>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating
                  value={4}
                  name="rating"
                  readOnly="true"
                />
              </Box>
              <Typography className={classes.typoTitle}>Great Experience!!</Typography>
              </Grid>
              <Typography className={classes.typoDescription}>
                The meeting was on time and the food was in a great state to charity. 
                I hope we can have more food charity in the future.
              </Typography>
           </Paper>
           
         </div>
      <Footer/>
    </React.Fragment>
  );
}