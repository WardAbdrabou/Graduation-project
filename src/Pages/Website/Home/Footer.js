import React from "react";
// import footerlogo from './../../../assests/logo.png'
import { Link } from "react-router-dom";
import './Footer.css';
import footerlogo from "./../../../assests/logo3.jpg"

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#6F9A61', width: '100%', height: 'auto', overflow: 'hidden', padding: '25px 0', marginTop: '50px', color: 'aliceblue' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <img src={footerlogo} alt='logo' className="logo"/>
                        <h2 className="footHeader" style={{ paddingTop: '8px', fontWeight: 'bold' }}>Agri Guide</h2>
                        <p className="footText" style={{ fontSize: '18px' }}>loreem ipssum is dolor iy toi can see <br />it i would help you to
                            Know ekjh nnnnj<br /> tommer hhhaidy as tou like you can see it
                            How are you iam fine</p>


                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2 className="linkHeader" style={{ fontWeight: 'bold' }}>Our Links</h2>
                        <ul style={{ listStyle: 'none', marginLeft: '-25px' }}>
                            <li>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Home</Link></li>
                            <li>  <Link to="/service" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Service</Link></li>
                            <li>  <Link to="/community" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Community</Link></li>
                            <li>  <Link to="/about us" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>About Us</Link></li>
                            <li>  <Link to="/contact us" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2 style={{ fontWeight: 'bold' }}>Our Service</h2>
                        <ul style={{ listStyle: 'none', marginLeft: '-25px' }}>
                            <li style={{ textDecoration: 'none' }}>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '19px', lineHeight: '2px' }}>Soil Detection</Link></li>
                            <li>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Plant Disease</Link></li>
                            <li>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>consultation</Link></li>
                            <li>  <Link to="/GrowingTips" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Growing Tips</Link></li>
                            <li>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Smart Sensor</Link></li>
                            <li>  <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontSize: '17px', lineHeight: '2px' }}>Suitable Plant</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;