import React from 'react';
import Home_page from './pages/homepage/homepage'
import Hiv_page from './pages/Hiv_page'
import Xray_page from './pages/Xray_page'
import Blood_page from './pages/blood_page' 

import {Switch, Route} from 'react-router-dom'




const App =()=>(
  <div>
    <Switch>
    <Route path='/' exact component={Home_page} />
    <Route path='/hiv'  component={Hiv_page} />
    <Route path='/xray'  component={Xray_page} />
    <Route path='/blood'  component={Blood_page} />
    </Switch>

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