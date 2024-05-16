import React from "react";
import './../../Css/card.css';
import aboutUs from './../../assests/aboutUs.png';
import NavBar from "../../Components/NavBar";
import Footer from "./Home/Footer";


function AboutUs  () {
    return(
        <>
        <NavBar></NavBar>
        <div className="heading">
                <h1 className="main-title">About Us</h1>
                <p className="main-titlep">welcome to our AgriGuide it  works to improve farm productivity and increase agricultural efficiency
                </p>
        </div>
        <div className="about-container" >
          <div className="row">
            <div className="col-md-6">
              <img src={aboutUs} alt="chosse us"style={{maxWidth:'100%'}} />
            </div>
            <div className="col-md-6" style={{paddingTop:'8px'}} >
              <p> Welcome to our AgriGuide Website.
                 We are a graduate team who would like to help develop agriculture using modern technology.
                 AgriGuide developed to identify the type of soil effectively, suggest the appropriate crop for the type of soil,
                 determine the appropriate amount of water that we need for the soil,
                 and discover if there is a disease in the plant using artifical intelligence and image processing technique,
                 You can learn more by trying our Service.The proposed solution aims to provide farmers,landowners,students
                 interseted in agriculture professional with a fast and reliable tool for the detection  of soil type and provide information on irrigation needs and plant disease,
                 which can ultimately increase crop yields and reduce financial losses
                 </p>
             
            </div>
          </div>
          <div className="objective">
            <p></p>
          </div>

        </div>
        <Footer></Footer>
        </>
    );
}

export default AboutUs;