import React, { useContext, useState } from "react";
import {SocketContext} from '../socketContext'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {
  TextField,
  Paper,
  Button,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Phone, Assignment, PhoneDisabled } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "columns",
  },

  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "columns",
    },
  },

  container: {
    width: "600px",
    margin: "35px 0",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },

  margin: {
    marginTop: "20px",
  },

  padding: {
    padding: 20,
  },

  paper: {
    padding: "10px 20px",
    border: "1px solid black",
  },
}));

function Options({ children }) {
  const {callEnded, name, setName,me, leaveCall,callUser,callAccepted} = useContext(SocketContext)

  const classes = useStyles();

  const [idToCall, setIdToCall] = useState('');

  console.log(me)
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.root}>
          <Grid className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onClick={(e) => setName(e.target.event)}
                fullWidth
              />
              {console.log(me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  startIcon={<Assignment fontSize="large" />}
                  color="primary"
                  fullWidth
                >Copy your Id</Button>
              </CopyToClipboard>
            </Grid>





            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField
                label="Name"
                value={idToCall}
                onClick={(e) => setIdToCall(e.target.event)}
                fullWidth
              />


              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  className={classes.margin}
                  color="secondary"
                  fullWidth
                  onClick={leaveCall}
                >Hang Up</Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<Phone fontSize="large" />}
                  className={classes.margin}
                  color="primary"
                  fullWidth
                  onClick={()=>callUser(idToCall)}
                >Call</Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
  
    </Container>
  );
}

export default Options;
