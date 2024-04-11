import React from "react";
import './App.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import Main from "./components/main";
import Edit from "./components/edit";
import Create from "./components/create";
import Story from "./components/story";
import Archive from "./components/archive";
 const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Main />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/archive" element={<Archive />} />
       <Route path="/story/">
        <Route path=":collection" element={<Story/>} />
       </Route>
     </Routes>
   </div>
 );
};
 export default App;