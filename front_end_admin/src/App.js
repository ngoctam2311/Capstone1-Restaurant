import React from "react";
import Topbar from "./componets/header/Topbar";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./page/pagehome_ower/home/Home";
import "./App.css";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Createprofile from "./page/pagehome_ower/containers/CreateProfile/Createprofile";

class App extends React.Component {
   render() { 
       return (
        <Router>
            <div className="Main">
               <Topbar/>
               <div className="slide"></div>
                <div className="container">
               <Sidebar/>
                <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route path="/create">
                        <Createprofile/>
                    </Route>
               </Switch>
             </div>
           </div>
           </Router>
       )
   }
}

export default App