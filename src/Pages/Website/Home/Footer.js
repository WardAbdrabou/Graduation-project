import React from "react";
import footerlogo from '../../../assests/logo4.png'
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#6F9A61', width: '100%', height: '350px', overflow: 'hidden', padding: '25px 0', marginTop: '50px', color: 'aliceblue' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <img src={footerlogo} alt='logo' />
                        <h2 className="footHeader" style={{ paddingTop: '8px', fontWeight: 'bold' }}>Agri Guide</h2>
                        <p className="footText" style={{ fontSize: '18px' }}>Welcome to our AgriGuide Website.<br/>
                         We are a graduate team who would like to help develop<br/> agriculture using modern technology. 
                         It works to improve<br/> farm productivity and increase agricultural efficiency
                            </p>


                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2 className="linkHeader" >Our Links</h2>
                        <ul style={{ listStyle: 'none', marginLeft: '34px' }} className="ulfooter">
                            <li>  <Link to="/home" >Home</Link></li>
                            <li>  <Link to="/service" >Service</Link></li>
                            <li>  <Link to="/community" >Community</Link></li>
                            <li>  <Link to="/AboutUs" >About Us</Link></li>
                            <li>    <Link to="/Contact"> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2 className="linkHeader">Our Service</h2>
                        <ul style={{ listStyle: 'none', marginLeft: '30px' }} className="ulfooter">
                            <li style={{ textDecoration: 'none' }}>  <Link to="/soilType" >Soil Detection</Link></li>
                            <li>  <Link to='/plantdetection' >Plant Disease</Link></li>
                            <li>  <Link to="/consultation">consultation</Link></li>
                            <li>  <Link to="/GrowingTips" >Growing Tips</Link></li>
                            {/* <li>  <Link to="/home" >Smart Sensor</Link></li> */}
                            <li>  <Link to='/suitableplant' >Suitable Plant</Link></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;