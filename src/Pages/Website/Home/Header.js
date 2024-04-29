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
          <h5>Dissuade ecstatic and properly saw entirely sir why laughter endeavar.
            In an my hointure harrible margaret suitable he speedily
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