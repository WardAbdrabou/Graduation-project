import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col-md-6">
           <h3>Original & Natural</h3>
          <h1>AgriGuide</h1>
        
          <h2>Good Agriculture</h2>
        
          <h5>welcome to our AgriGuide Website It Works to Improve Farm
             Productivity and Increase Agricultural Efficiency
          </h5>
         

        </div>
        <div className="col-md-6">

        </div>
      </div>
    </header>
  )
}
export default Header;


