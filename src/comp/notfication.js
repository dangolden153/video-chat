optionsimport React, { useContext } from "react";
import {SocketContext} from '../socketContext'

import {Button} from '@material-ui/core'



function Notifications() {
  const {call,callAccepted,  answerCall} = useContext(SocketContext)

  return (
    <>
      {call.isRecieved && callAccepted(
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{call.name} is call : </h1>
            <Button variant="contained" color="primary" onClick={answerCall} >Answer</Button>
          </div>
        )}
    </>
  );
}

export default Notifications;
