import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../HP/Header";
import Footer from "../HP/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "react-modal";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
}));

let search = window.location.search;
let params = new URLSearchParams(search);
let compName = params.get("comp");
//console.log("Company name: " + compName)

const sections = [];

export default function Company() {
  const classes = useStyles();
  const [food, setFood] = useState([]);
  const [comps, setComps] = useState({});
  const [selectedType, setSelectedType] = useState("All");

  useEffect(
    () => {
      const fetchData = async () => {
        const foodResult = await axios(
          "http://localhost:8080/api/food/searchByComp?comp=" + compName
        );
        setFood(foodResult.data);
        const compResponse = await axios(
          "http://localhost:8080/api/comps/searchByName?comp=" + compName
        );
        setComps(compResponse.data);
      };
      fetchData();
    },
    [setFood],
    { setComps }
  );

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [amount, setAmount] = useState(null);
  const [SKU, setSKU] = useState(null);
  const [picUrl, setPicUrl] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleSnackOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addFood = async () => {
    await axios.post("http://localhost:8080/api/food/add", {
      name: name,
      type: type,
      amount: amount,
      SKU: SKU,
      company: comps.name,
      picUrl: picUrl,
    });
    console.log("Food posted!");
    closeModal();
    // handleSnackOpen();
    window.location.reload();
  };

  const addOne = async (foodItemId) => {
    let foodItem = await (
      await axios.get("http://localhost:8080/api/food/" + foodItemId)
    ).data;
    await axios.put("http://localhost:8080/api/food/" + foodItemId, {
      name: foodItem.name,
      type: foodItem.type,
      amount: foodItem.amount + 1,
    });
    window.location.reload();
  };
  const removeOne = async (foodItemId) => {
    let foodItem = await (
      await axios.get("http://localhost:8080/api/food/" + foodItemId)
    ).data;
    await axios.put("http://localhost:8080/api/food/" + foodItemId, {
      name: foodItem.name,
      type: foodItem.type,
      amount: foodItem.amount - 1,
    });
    window.location.reload();
  };

  const removeFood = async (foodItemId) => {
    await axios.delete("http://localhost:8080/api/food/" + foodItemId);
    window.location.reload();
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Header */}
      <Container maxWidth="lg">
        <Header title={comps.name} sections={sections} />
      </Container>

      {/* Main Grid of page */}
      <Grid container spacing={3} direction="row" className={classes.Grid}>
        {/* Card displaying Company */}
        <Grid item xs={6} sm={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={comps.picUrl} />
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
          {/* Filter */}
          <Grid item xs={6} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">FoodType</InputLabel>
              <Select
                onChange={(e, value) => {
                  setSelectedType(value.props.children);
                }}
              >
                <MenuItem value={10}>Canned</MenuItem>
                <MenuItem value={20}>Frozen</MenuItem>
                <MenuItem value={30}>Vegetable</MenuItem>
                <MenuItem value={40}>Fruit</MenuItem>
                <MenuItem value={50}>Drinks</MenuItem>
                <MenuItem value={60}>All</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Food list */}
          <Grid item xs={12} sm={9}>
            <div>
              <List className={classes.root}>
                {food
                  .filter((food) =>
                    selectedType === "All"
                      ? food === food
                      : food.type === selectedType
                  )
                  .map((item) => (
                    <ListItem key={`${item.id}`}>
                      <ListItemIcon>
                        <Avatar alt="FoodIcon" src={`${item.picUrl}`} />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${item.name}`}
                        secondary={
                          "Amount: " +
                          `${item.amount}` +
                          " Type: " +
                          `${item.type}`
                        }
                      />
                      <ButtonGroup variant="contained" color="primary">
                        <Button
                          onClick={() => {
                            addOne(`${item._ID}`);
                          }}
                        >
                          +
                        </Button>
                        <Button
                          onClick={() => {
                            removeOne(`${item._ID}`);
                          }}
                        >
                          -
                        </Button>
                        <Button
                          onClick={() => {
                            removeFood(`${item._ID}`);
                          }}
                        >
                          DELETE
                        </Button>
                      </ButtonGroup>
                    </ListItem>
                  ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Fab
          variant="extended"
          className={classes.fab}
          color="primary"
          aria-label="add"
          onClick={openModal}
        >
          <AddIcon className={classes.extendedIcon} />
          Add Food
        </Fab>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customModalStyles}
          contentLabel="Example Modal"
        >
          <div alignment="right">
            <Button onClick={closeModal}>
              <CloseIcon />
            </Button>
          </div>
          <div>
            <h1>Add food</h1>
          </div>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              name="amount"
              autoComplete="amount"
            />
            <Select
              className={classes.select}
              onChange={(e, value) => setType(value.props.children)}
              fullWidth={true}
            >
              <MenuItem value={10}>Canned</MenuItem>
              <MenuItem value={20}>Frozen</MenuItem>
              <MenuItem value={30}>Vegetable</MenuItem>
              <MenuItem value={40}>Fruit</MenuItem>
              <MenuItem value={50}>Drinks</MenuItem>
            </Select>
            <TextField
              variant="outlined"
              margin="normal"
              label="SKU"
              value={SKU}
              onChange={(e) => setSKU(e.target.value)}
              name="SKU"
              autoComplete="SKU"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Url to image"
              value={picUrl}
              onChange={(e) => setPicUrl(e.target.value)}
              name="picUrl"
            />
            <Button onClick={addFood} variant="contained">
              {" "}
              <AddIcon className={classes.extendedIcon} />
              Add
            </Button>
          </form>
        </Modal>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Food Added! Refresh page to see change.
        </Alert>
      </Snackbar>
      <Footer />
    </React.Fragment>
  );
}
