import React from 'react';
import Home from "./pages/home"
import Rooms from "./pages/rooms"
import SingleRooms from "./pages/singleRooms"
import Error from "./pages/error"

import {Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import "./App.css"


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms/" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRooms} />
    <Route  component={Error} />
     
     </Switch>
    </>
  );  
}

export default App;



