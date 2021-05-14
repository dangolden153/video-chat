import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {ContextProvider} from './socketContext'
// import './index.css';

import 'semantic-ui-css/semantic.min.css'

import App from './App';


ReactDOM.render(
 
  
   <ContextProvider>
      <App />
   </ContextProvider> 
   
  ,
   
  document.getElementById('root')
);


