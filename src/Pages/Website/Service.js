import React from "react";
// import ServiceItem from "./ServiceItem";

import soildetect from "../../assests/soil detection.png";
import suitableplant from "../../assests/suitable plant.png";
import smartsensor from "../../assests/smart sensor.png";
import diseasedetection from "../../assests/disease detection.png";
import growingtips from "../../assests/growingtips.png";
import consultation from "../../assests/consulation.png";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "./Home/Footer";

const Service = () => {
  // const{service} = props;
  return (
    <>
      <NavBar></NavBar>
      <h2 className="text-center main-title"> Our Service</h2>

      <div className="cards">
        <div className="container">
          <div className="box">
            <img src={soildetect} />
            <div className="contentbox">
              <h3 className="limitnumberh" style={{ fontWeight: "bold" }}>
                Soil Detection
              </h3>
              <p className="limitnumber">Detect The type of the soil</p>
            </div>
            <div className="infoPlant">
              <Link to="/soilType"> Try It</Link>
              <EastIcon className="icon" />
            </div>
          </div>
          {/* ************ */}
          <div className="box">
            <img src={suitableplant} />
            <div className="contentbox">
              <h4 className="limitnumberh" style={{ fontWeight: "bold" }}>Suitable Plant </h4>
              <p className="limitnumber">The best plant rely on soil type</p>
              </div>
              <div className="infoPlant">
                <Link to="/suitableplant"> Try It </Link>
                  <Link to="/suitableplant">
                    <EastIcon />
                  </Link>
              </div>
          </div>
          <div className="box">
            <img src={smartsensor} />
            <div className="contentbox">
              <h4 className="limitnumberh" style={{ fontWeight: "bold" }}> Smart Sensor </h4>
              <p className="limitnumber">Measure the amount af water</p>
              </div>
              <div className="infoPlant">
                <Link to="/sensor"> Try It </Link>
                    <EastIcon className="icon" />
              </div>
            </div>
            {/* ************************* */}
          <div className="box">
            <img src={diseasedetection} />
            <div className="contentbox">
              <h4 className="limitnumberh" style={{ fontWeight: "bold" }}> Disease Detection </h4>
              <p className="limitnumber">
                Detect Pests and diseases that can hurt the plant
              </p>
              </div>
              <div className="infoPlant">
                <Link to="/plantdetection"> Try It </Link>
                
                  <Link to="/plantdetection">
                    <EastIcon />
                  </Link>
                
              </div>
            </div>

          <div className="box">
            <img src={growingtips} />
            <div className="contentbox">
              <h4 className="limitnumberh" style={{ fontWeight: "bold" }}> Growing Tips </h4>
              <p className="limitnumber">
                Include information on soil , watering frequency, and other{" "}
              </p>
              </div>
              <div className="infoPlant">
                <Link to="/GrowingTips"> Try It </Link>
                
                  <Link to="/GrowingTips">
                    <EastIcon />
                  </Link>
              </div>
          </div>

          <div className="box">
            <img src={consultation} />
            <div className="contentbox">
              <h4 className="limitnumberh" style={{ fontWeight: "bold" }}> Consultation </h4>
              <p className="limitnumber">
                Contact with one of our instructors for advice
              </p>
              </div>
              <div className="infoPlant">
                <Link to="/consultation"> Try It </Link>
                  <Link to="/consultation">
                    <EastIcon />
                  </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Service;
