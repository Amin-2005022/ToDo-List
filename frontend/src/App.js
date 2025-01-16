import React, { useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import About from "./component/about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/signUp/signUp";
import ToDo from "./component/todo/todo";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(sessionStorage.getItem("email"));
        if(sessionStorage.getItem("email")){
            dispatch(authActions.login());
        }
      });
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
