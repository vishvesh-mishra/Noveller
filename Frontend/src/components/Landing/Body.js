import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import "./styles.css";
import { Link } from "react-router-dom";

function Body({ isLoggedIn, user, handleLogOut }) {
  return (
    <div className="gege" > 
    
      <section id="section-0">
        <Navbar
          handleLogOut={handleLogOut}
          isLoggedIn={isLoggedIn}
          user={user}
        />
        <Header />
      </section>
    </div>
  );
}

export default Body;
