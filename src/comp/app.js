import React from 'react';
import Video from './component/Video'
import Options from './component/Options'
import Notifications from './component/Notifications'
import './App.css'

import {AppBar, Typography} from '@material-ui/core'



const App =()=>(
  <div className="appContainer">
    <AppBar position="static">
      <Typography variant='h2' align="center" >Video chat</Typography>
    </AppBar>

  <Video />

  <Options>
    <Notifications />
  </Options>

 </div>
)
export default App;


/// homepage page
/// status bar component
/// the up nav component
/// the header component
/// currency section component
/// menu component 
/// position bottom || down nav component