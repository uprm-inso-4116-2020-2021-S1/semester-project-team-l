import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "../HP/Header";
import Photo from "../HP/Photo";
import Sidebar from "../HP/Sidebar";
import Footer from "../HP/Footer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SearchBar from "material-ui-search-bar";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  margin: {
    marginLeft: theme.spacing(10),
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    maxHeight: 600,
  },
}));

const activeSections = [
  { title: "About Us", url: "/aboutus" },
  { title: "What we do", url: "/whatwedo" },
  { title: "User Profile", url: "/user" },
];
const sections = [
  { title: "About Us", url: "/aboutus" },
  { title: "What we do", url: "/whatwedo" },
];

const photo = {
  image: "https://source.unsplash.com/random",
};

const sidebar = {
  title: "About",
  description:
    "We are a group of students that have the determination to help people around the world giving organizations the accesibility to get charity and hand it to those in need.",
};

export default function HomePage(props) {
  const [comps, setComps] = useState([]);
  const [active, setActive] = useState(false);
  const history = useHistory();
  const getComps = async () => {
    const result = await axios("http://localhost:8080/api/comps");
    setComps(result.data);
  };
  const checkActive = () => {
    if (Cookies.get("LoggedIn") === "true") {
      setActive(true);
    }
  };

  useEffect(() => {
    getComps();
    checkActive();
  }, [active]);
  

  const classes = useStyles();
  const [] = useState([]);
  const [] = useState(true);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Food4Help" sections={active ?activeSections:sections} />
        <Photo post={photo} />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
          />
          <Grid item xs={6} sm={6} alignItems="center" justify="center">
            <Grid item xs={12} sm={6}>
              <SearchBar
                className={classes.margin}
                onChange={() => {}}
                onRequestSearch={() => {}}
              />
            </Grid>
            <Grid item spacing={3} alignItems="center" justify="center">
              <Grid item xs={12} sm={9}>
                <List>
                  {comps.map((item) => (
                    <ListItem
                      key={`${item.id}`}
                      button
                      component="a"
                      onClick={()=>{
                        if(Cookies.get("LoggedIn") === "true"){
                          history.push("/company?comp=" + `${item.name}`)
                        }
                        else{
                          history.push("/signupButton")
                        }
                      }}
                    >
                      <ListItemIcon>
                        <Avatar alt="CompIcon" src={`${item.picUrl}`} />
                      </ListItemIcon>
                      <ListItemText primary={`${item.name}`} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
