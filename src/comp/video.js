import React,{useContext} from 'react'
import {SocketContext} from '../socketContext'


import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid, Paper} from '@material-ui/core'

const useStyle = makeStyles((theme) =>({
    video:{
        width: "550px",
        [theme.breakpoints.down('xs')]: {
            width: "300px"
        }
    },
    gridContainer:{
        justifyContent: "center",
        [theme.breakpoints.down('xs')]:{
            flexDirection: "columns"
        }
    },

    paper: {
        margin: "10px",
        padding: "10px",
        border: "2px solid black"
    }
}))


function Video() {
    const {call,callAccepted, callEnded, name, stream, myVideo, userVideo, answerCall, leaveCall} = useContext(SocketContext)
    const classes = useStyle()
    return (
      <Grid container className={classes.gridContainer}>
          {stream && (
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom >{name || "Name"}</Typography>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video}/>
                </Grid>
            </Paper>
          )}
            
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom >{call.name || 'Name'}</Typography>
                    <video playsInline muted ref={userVideo} autoPlay className={classes.video}/>
                </Grid>
            </Paper>
            )}
            
        </Grid>  
    )
}

export default Video
