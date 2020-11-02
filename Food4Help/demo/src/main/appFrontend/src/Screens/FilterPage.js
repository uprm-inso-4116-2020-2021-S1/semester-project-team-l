import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar";
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { stockData } from './dummy1';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
    formControl: {
      margin: theme.spacing(3),
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
      },
      listSection: {
        backgroundColor: 'inherit',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
      },
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Register Your Company', url: '/register' },
  { title: 'Review', url: '/reviews' },
];


export default function FilterPage() {
  const classes = useStyles();
  const [state, setState] = React.useState({
      supermarket: true,
      restaurant: false,
      fastfood: false,
    });
  const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

  const { supermarket, restaurant, fastfood } = state;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Filter Page" sections={sections} />
      </Container>
      <Grid container spacing={2} alignItems='center' justify='center' direction='row'>
        <Grid item xs={6} sm={3}>
      <SearchBar
          onChange={() => {}}
          onRequestSearch={() =>  {}}
        />
         </Grid>
         <Grid item xs={6} sm={3}>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select Category</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={supermarket} onChange={handleChange} name="supermarket" />}
                        label="Supermarket"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={restaurant} onChange={handleChange} name="restaurant" />}
                        label="Restaurant"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={fastfood} onChange={handleChange} name="fastfood" />}
                        label="Fast Food"
                      />
                    </FormGroup>
                   </FormControl>
         </Grid>
       </Grid>
       <Grid container spacing={2} alignItems='center' justify='center'>
        <Grid item xs={12} sm={3}>
        <List className={classes.root}>
                    {stockData.map((item) => (
                      <ListItem key={`${item.companyName}`}>
                        <ListItemText primary={`${item.companyName}`} />
                      </ListItem>
                    ))}
            </List>
            </Grid>
         </Grid>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}
