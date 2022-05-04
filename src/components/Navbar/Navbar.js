import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../../Firebase/Firebase.init";


const Navbar = () => {
  const [user, setUser]=useState({});
  
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
 const uid = user.uid;
        // ...
      } else {
        // User is signed out
        setUser({});
        
      }
    });

  }, []);
  
  const handleLogOut=()=>{
    signOut(auth)
      .then(() => {
      
    })
    .catch((error) => {
      
    });
  }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/home">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/services">Servecies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutMe">About me</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/registration">Registration</Link>
        </li> */}

        {user?.uid? <button onClick={handleLogOut}>Log out </button> : <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
          
        </li>}
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;