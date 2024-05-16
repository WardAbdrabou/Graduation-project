import React from "react";
import sensor from '../../assests/sensor.png'
import Footer from "./Home/Footer";
import NavBar from "../../Components/NavBar";

const Sensor = () => {

    return (
        <>
             <NavBar></NavBar>
            <div className="sensor" id="sensor">
                <div className="container d-flex align-items-center justify-content-between d-small">
                    <div className="col-5 headersensor" >
                        <p className="sensor-titlep">Welcome to our Website</p>
                        <h2 className="headers">Water sensor </h2>
                        <p className="sensor-title">If you want to buy sensor
                            please click this button</p>
                            <button className="register-navBar btn-sensor">Buy</button>
                    </div>
                    <div>
                    <img src={sensor} alt="img" class="infoSen"></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>

    );
};

export default Sensor;

