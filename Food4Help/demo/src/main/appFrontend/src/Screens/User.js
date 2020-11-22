import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../HP/Header';
import Footer from '../HP/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

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
    }
}));

const sections = [
  { title: 'Home Page', url: '/' },
  { title: 'About Us', url: '/aboutus' },
  { title: 'What we do', url: '/whatwedo' },
  { title: 'Companies Page', url: '/company' },
];

export default function User() {

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("Juan Perez Torres");
  const [email, setEmail] = useState("juan.perez@upr.edu");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("24");

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="User Profile" sections={sections} />
      </Container>
      <div className={classes.root}>
            <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" className={classes.large}/>
            <Grid item xs={12} md={4}>
                         <Paper elevation={0} className={classes.sidebarAboutBox}>
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
                          {!isEdit ? 
                           <Typography variant="h6">
                             Gender: {gender}
                           </Typography> : 
                           <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           value={gender}
                           type="text"
                           onChange={genderChangeHandler}
                           id="gender"
                           label="Gender"
                           name="gender"
                           autoComplete="gender"
                           autoFocus
                         />
                           }
                           {!isEdit ? 
                           <Typography variant="h6">
                             Age: {age}
                           </Typography> : 
                           <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           value={age}
                           type="text"
                           onChange={ageChangeHandler}
                           id="age"
                           label="Age"
                           name="age"
                           autoComplete="age"
                           autoFocus
                         />
                           }
                    </Paper>
                    <div className={classes.buttonLayout}>
                    {!isEdit ? 
                    (<Button onClick={handleEdit}>
                      Edit
                    </Button>) :
                    (<Button onClick={handleSave}>
                      Save
                    </Button>)
                    }
                    </div>
            </Grid>
       </div>
      <Footer title="" description="Food4Help" />
    </React.Fragment>
  );
}