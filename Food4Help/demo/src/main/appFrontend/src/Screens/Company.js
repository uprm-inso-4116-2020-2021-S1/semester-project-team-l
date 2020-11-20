import React, {useState, useEffect, Component, useCallback, useReducer, formReducer} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Sidebar from '../HP/Sidebar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { stockData } from './dummy1';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const sidebar = {
  title: 'Contact',
};
const sidebar2 = {
  title: 'Meeting Info',
  description: 'Hours Available: ',
};

const sections = [];

export default function Company() {
  const classes = useStyles();
    const [state, setState] = React.useState({
        cannfood: false,
        frozenfood: false,
        vegetables: false,
        fruit: false,
        drinks: false,
      });
    const handleChange = (event) => {
          setState({ ...state, [event.target.name]: event.target.checked });
        };

    const { canned, frozen, vegetables, fruit, drinks } = state;

    const [food, setFood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost:8080/api/food',
          );
          setFood(result.data);
        };
        fetchData();
      }, [setFood]);

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="COMPANY NAME" sections={sections} />
        </Container>
        <Grid container spacing={3} alignItems='center' justify='center' direction='row'>
          <Grid item xs={6} sm={1} alignItems='center' justify='center'>
            <Sidebar
              title={sidebar.title}
              description={stockData.map((item)=>{
                if(item.id=="1"){
                   return item.phone;
                }
              })}
              archives={sidebar.archives}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SearchBar
             onChange={() => {}}
              onRequestSearch={() =>  {}}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">FoodType</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              onChange={handleChange}
            >
            <MenuItem value={10}>Canned</MenuItem>
            <MenuItem value={20}>Frozen</MenuItem>
            <MenuItem value={30}>Vegetables</MenuItem>
            <MenuItem value={40}>Fruit</MenuItem>
            <MenuItem value={50}>Drinks</MenuItem>
            </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' justify='center'>
          <Grid item xs={12} sm={3}>
          <List className={classes.root}>
                      {food.map((item) => (
                        <ListItem key={`${item.id}`}>
                          <ListItemText primary={`${item.name}`} />
                        </ListItem>
                      ))}
              </List>
              </Grid>
          </Grid>
           
        <Footer/>
      </React.Fragment>
    );
}