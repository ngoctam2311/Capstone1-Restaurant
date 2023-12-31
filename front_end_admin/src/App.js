import React from "react";
import Topbar from "./componets/header/Topbar";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./page/pagehome_ower/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Createprofile from "./page/pagehome_ower/containers/CreateProfile/Createprofile";
import ProfileRestaurant from "./page/pagehome_ower/containers/ProfileRestaurant/ProfileRestaurant";
import Reservations from "./page/pagehome_ower/page/RestaurantList/Reservations";
import Login from "./componets/FormAuth/Login";


export default function App()  {
       return (
            <div className="Main">
               <Topbar/>
                <div className="container">
                <Sidebar/>
                 <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/create" element={<Createprofile/>} />
                    <Route path="/profile" element={<ProfileRestaurant/>} />
                    <Route path="/list" element={<Reservations/>} /> 
                    <Route path="/login" element={<Login/>} />    
                </Routes>
             </div>
           </div>
       
          
       );
}
