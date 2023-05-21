import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./Firebase";

function App() {
  const [userName,setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else {
        setUserName("");
      }
    })
  },[]);
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home name={userName}/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
