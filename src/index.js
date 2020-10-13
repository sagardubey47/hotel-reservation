import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import RoomProvider from './context.js';


ReactDom.render(
  <RoomProvider>
      <Router>
        <App />
      </Router>
  </RoomProvider>
    , 
    document.getElementById("root")
 );
