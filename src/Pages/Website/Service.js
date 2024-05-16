import React from "react";
// import ServiceItem from "./ServiceItem";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import soildetect from '../../assests/soil detection.png';
import suitableplant from '../../assests/suitable plant.png';
import smartsensor from '../../assests/smart sensor.png';
import diseasedetection from '../../assests/disease detection.png';
import growingtips from '../../assests/growing tips.png';
import consultation from '../../assests/consulation.png';
import { Link } from "react-router-dom";
import './Service.css';
import NavBar from './../../Components/NavBar';
import Footer from "./Home/Footer";
// import { PROFILE, baseURL } from "../../Api/Api";
// import { Axios } from "../../Api/axios";


export default function Service()  {
    // const [user, setuser] = useState("");



    // useEffect(() => {
    //     Axios.get(`${baseURL}/${PROFILE}`)
    //         .then((data) => {
    //             setuser(data.data.user);
    //             console.log(data.data.user);
    //         })            
    //     }, []);
    return (
        <>
        <NavBar></NavBar>
            <h2 className="text-center p-3 main-title" > Our Service</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cardService" >
                            <img src={soildetect} style={{width:"300px" }} />
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    Soil Detection
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>This service helps you know what type of your Soil</p>
                                <Link to="/soiltype" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}>Try It</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardService">
                            <img src={suitableplant} style={{width:"300px" }}/>
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    suitableplant
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>This service helps you know what type of your plants suitable for planting in your soil </p>
                                <Link to="/suitableplant" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}>Try It</Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="cardService">
                            <img src={smartsensor} style={{width:"300px" }} />
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    Smart Sensor
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>Our goal is to ensure that you have everything you need to feel comfortable and ready to make an impact.</p>
                                <Link to="/sensor" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}>Try It</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="cardService">
                            <img src={diseasedetection} style={{width:"300px" }}/>
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    Disease Detection
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>This service helps you know what type of disease your plant is infected with</p>
                                <Link to="/plantdetection" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}>Try It</Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="cardService">
                            <img src={growingtips} style={{width:"300px" }}/>
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    Growing Tips
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>Provide shade or protection for plants that are sensitive to intense Sunlight</p>
                                <Link to='/growingtips' style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}>Try It</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardService">
                            <img src={consultation} style={{width:"300px" }}/>
                            <div className="c-contain" style={{ backgroundColor: "#fff" }}>
                                <h4 className="header" style={{ color: "#6F9A61", marginTop: '10px', fontSize: "27px", display: "flex", justifyContent: "center", paddingTop: '5px' }}>
                                    consultation
                                </h4>
                                <p className="text" style={{ padding: '5px' }}>you Can connect with our expert team members for personalized assistance.</p>
                                {/* <Link to="/consultation" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}
                                onClick={(e) => (  user.membership_level_id === 1 ? (alert("you only have three time to access this page")) : (" ")   )}
                                >Try It</Link> */}
                                <Link to="/consultation" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '220px', paddingTop: '0px' }}
                                >Try It</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Footer></Footer>
        </>
    );
}
