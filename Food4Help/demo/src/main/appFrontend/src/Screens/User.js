import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Select from "react-select";
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
   root: {
      marginLeft: theme.spacing(50),
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        height: theme.spacing(32),
      },
    },
    large: {
        width: theme.spacing(45),
        height: theme.spacing(45),
      },
    buttonLayout: {
      textAlign: 'center'
    },
    select: {
      width: "97%",
      marginLeft: theme.spacing(1),
      zIndex: 9999
    },
}));

const sections = [
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
];

export default function User() {

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [isOrg, setIsOrg] = useState(false);
  const [entity, setEntity] = useState(null);
  const [phone, setPhone] = useState(null);

  const companyOptions = [
    { value: "Supermarket", label: "Supermarket" },
    { value: "Restaurant", label: "Restaurant" },
    { value: "Fast-food", label: "Fast-Food" },
  ];

  const fetchData = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:8080/user/"+ Cookies.get("User")
    }).then((response) => {
      if (response.data) {
        setName(response.data.firstName + " " + response.data.lastName);
        setEmail(response.data.email);
        setEntity(response.data.entity);
        setPhone(response.data.phoneNumber);
        setIsOrg(response.data.organization)
      }
    });
  };
  const updateUser = async () => {
    await axios.put("http://localhost:8080/user/" + Cookies.get("User"), {
      entity: entity,
      phoneNumber: phone,
    });
    
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const entityChangeHandler = (e) => {
    setEntity(e.value);
    console.log(entity)
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
    console.log(phone)
  };

  useEffect(() => {
    fetchData();
  },[])

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="User Profile" sections={sections} />
      </Container>
      <div className={classes.root}>
            <Avatar alt="Avatar" src="http://via.placeholder.com/640x360" className={classes.large}/>
            <Grid item xs={12} md={4}>
                         <div elevation={0} className={classes.sidebarAboutBox}>
                           {!isEdit ? 
                           <Typography variant="h6">
                             Name: {name}
                           </Typography> : 
                           <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           value={name}
                           type="text"
                           onChange={nameChangeHandler}
                           id="name"
                           label="Name"
                           name="name"
                           autoComplete="name"
                           autoFocus
                         />
                           }
                           {!isEdit ? 
                           <Typography variant="h6">
                             Email: {email}
                           </Typography> : 
                           <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           value={email}
                           type="text"
                           onChange={emailChangeHandler}
                           id="email"
                           label="Email"
                           name="email"
                           autoComplete="email"
                           autoFocus
                         />
                           }
                           {!isEdit && !isOrg ? 
                           <Typography variant="h6">
                             Entity: {entity}
                           </Typography> : 
                           !isOrg ?
                           <Select
                           defaultInputValue={entity}
                           onChange={entityChangeHandler}
                           className={classes.select}
                           options={companyOptions}
                         /> :
                            <div></div>
                           }
                           {!isEdit ? 
                           <Typography variant="h6">
                             Phone Number: {phone}
                           </Typography> : 
                           <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           value={phone}
                           type="text"
                           onChange={phoneChangeHandler}
                           id="phone"
                           label="Phone"
                           name="phone"
                           autoComplete="phone"
                           autoFocus
                         />
                           }
                    </div>
                    <div className={classes.buttonLayout}>
                    {!isEdit ? 
                    (<Button variant="contained" onClick={handleEdit}>
                      Edit
                    </Button>) :
                    (<Button variant="contained" onClick={updateUser}>
                      Save
                    </Button>)
                    }
                    </div>
            </Grid>
       </div>
      <Footer/>
    </React.Fragment>
  );
}