import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col-md-6">
          <h3>Original & Natural</h3>
          <h1>Agriculture Matter</h1>
          <h2>Good Production</h2>
          <h5>AgriGuide is web developed to identify the type of 
soil effectively, suggest the appropriate crop for the type of soil, determine the 
appropriate amount of water that we need for the soil, and discover if there is a 
disease in the plant.
          </h5>
          <button><Link to="/service">Service</Link></button>

        </div>
        <div className="col-md-6">

        </div>
      </div>
    </header>
  )
}
export default Header;