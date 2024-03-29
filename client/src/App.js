import React from "react";
import './App.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import Main from "./components/main";
import Edit from "./components/edit";
import Create from "./components/create";
import Story1 from "./components/story1";
import Story2 from "./components/story2";
 const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Main />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/trunk-of-letters" element={<Story1 />} />
       <Route path="/moms-radio" element={<Story2 />} />
     </Routes>
   </div>
 );
};
 export default App;