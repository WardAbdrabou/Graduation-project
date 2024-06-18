import React from "react";
// import ServiceItem from "./ServiceItem";
import soildetect from './../../assests/soildetect .png';
import suitableplant from './../../assests/suitable plant.png';
import smartsensor from './../../assests/smart sensor.png';
import diseasedetection from './../../assests/disease detection.png';
import growingtips from './../../assests/growing tips.png';
import consultation from './../../assests/consulation.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import './Service.css';
import NavBar from "../../Components/NavBar";
import Footer from "./Home/Footer";




const Service = () => {
    // const{service} = props;
    return (
        <>
        <NavBar></NavBar>
            <h2 className="main-title"> Our Service</h2>
            <div className="container " style={{marginTop:'50px'}} >
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <img src={soildetect} />
                            <div className="c-contain" >
                                <h4 className="header" > Soil Detection</h4>
                                <p className="text" >detect The type of the soil</p>
                                <div className='growbm'>
                                    <Link to="/soilType" > Try It</Link>
                                    <h2 >
                                        <Link to='/soilType'>   <EastIcon /> </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={suitableplant} />
                            <div className="c-contain" >
                                <h4 className="header">suitable Plant </h4>
                                <p className="text" >The best plant rely on soil type</p>
                                <div className='growbm' >
                                    <Link to="/suitableplant" > Try It </Link>
                                    <h2 >
                                        <Link to='/suitableplant'  >  <EastIcon /> </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={smartsensor} />
                            <div className="c-contain" >
                                <h4 className="header" > Smart Sensor </h4>                                                                
                                <p className="text" >measure the amount af water</p>
                                <div className='growbm' >
                                    <Link to="/sensor" > Try It  </Link>
                                    <h2>
                                        <Link to='/sensor'  >  <EastIcon />  </Link>                         
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img src={diseasedetection} />
                            <div className="c-contain">
                                <h4 className="header" >  Disease Detection  </h4>                                                                
                                <p className="text" >detect Pests and diseases that can hurt the plant</p>
                                <div className='growbm' >
                                    <Link to="/plantdetection" >    Try It  </Link>
                                    <h2 >
                                        <Link to='/plantdetection' >   <EastIcon />    </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <img src={growingtips} />
                            <div className="c-contain" >
                                <h4 className="header" > Growing Tips </h4>                       
                                <p className="text" >include information on soil conditions, watering frequency, and other factors</p>
                                {/* <Link to='/GrowingTips' style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '250px', paddingTop: '0px' }}>Try It</Link> */}
                                <div className='growbm' >
                                    <Link to='/growingtips'> Try It  </Link>
                                    <h2>
                                        <Link to='/growingtips'  >  <EastIcon />   </Link> 
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={consultation} />
                            <div className="c-contain" >
                                <h4 className="header" >  consultation  </h4>                            
                                <p className="text" >contact with one of our instructors for information and advice</p>
                                <div className='growbm' >
                                    <Link to="/consultation" >  Try It  </Link>
                                    <h2 >
                                        <Link to="/consultation"  >  <EastIcon /> </Link>         
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Service;