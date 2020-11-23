import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    media: {
      height: 240,
    },

    Grid: {
      margin: 30,
    }
}));

let search = window.location.search;
let params = new URLSearchParams(search);
let compName = params.get('comp');
//console.log("Company name: " + compName)

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


    const [food, setFood] = useState([]);
    
    const[comps, setComps] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const foodResult = await axios('http://localhost:8080/api/food/searchByComp?comp=' + compName);
          setFood(foodResult.data); 
          const compResponse = await axios('http://localhost:8080/api/comps/searchByName?comp=' + compName);
          setComps(compResponse.data);
        };
        fetchData();
      }, [setFood], {setComps});
    return (
      <React.Fragment>
        <CssBaseline />

        {/* Header */}
        <Container maxWidth="lg">
          <Header title={comps.name} sections={sections} />
        </Container>

        {/* Main Grid of page */}
        <Grid container spacing={3} direction='row' className={classes.Grid}>
          
          {/* Card displaying Company */}
          <Grid item xs={6} sm={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={comps.picUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {comps.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    COMPDESCRITION
                  </Typography>
                  <Rating
                  value={Number(comps.score)}
                  name="rating"
                  readOnly="true"
                  />
                  <Typography variant="body2" color="textSecondary" component="p">
                    Open hours:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    COMP HOURS
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Phone:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    COMP PHONE
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Location:
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    COMP LOCATION
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Grid Cointaining Food Items and search! */}
          <Grid item xs={6} sm={6}>
            {/* SearchBar */}
            <Grid item xs={6} sm={6}>
              <SearchBar
              onChange={() => {}}
                onRequestSearch={() =>  {}}
              />
            </Grid>
            
            {/* Filter */}
            <Grid item xs={6} sm={4}>
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
     
            {/* Food list */}
            <Grid item xs={12} sm={6}>
              <List className={classes.root}>
                  {food.map((item) => (
                      <ListItem key={`${item.id}`}>
                        <ListItemIcon>
                        <Avatar alt="FoodIcon" src={`${item.picUrl}`} />
                        </ListItemIcon>
                        <ListItemText primary={`${item.name}`} secondary={"Amount: " + `${item.amount}` + " Type: " + `${item.type}`}/>
                      </ListItem>
                  ))}
              </List>
            </Grid>
        </Grid>
        </Grid>
           
        <Footer/>
      </React.Fragment>
    );
}