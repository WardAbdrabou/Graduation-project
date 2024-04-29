import React from "react";
import { useEffect, useState } from "react";

// import './GrowingTips.css';

// ward
import { Axios } from './../../../Api/axios';

// import { Grow , baseURL } from './../../Api/Api';
import SoilTypeList from "./SoilTypeList";
import soilType from './../../../assests/plant-leaf 1.png';
import { Navbar } from "react-bootstrap";
import NavBar from "../../../Components/NavBar";

// import { useParams } from "react-router-dom";

function SoilType() {   
    const [Soil, setSoil] = useState([]);
    const [search, setSearch] = useState("")
   
   
    
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/soils`)
          .then((data) => {
            console.log(data.data);
            setSoil(data.data);
            })
            .catch((error) => {
            console.log(error);
             });
    
      }, []);
  
    
    return (
      <>
      <NavBar></NavBar>
      <div className="text-center" style={{width:'100%',backgroundColor:'rgba(238, 238, 238, 0.5)'}}>
          <img src={soilType} alt='not found'style={{marginTop:'40px'}}/>
          <p style={{ color: "#6F9A61", fontSize: "44px",fontWeight:'bold'}}>Identify Soil For Free</p>
          <p style={{ color: "black", fontSize: "30px"}}>You Can Take a photo or search by soil name</p>
          <input placeholder="Enter Common Name"  onChange={event => setSearch(event.target.value)}style={{width:'50%',marginBottom:'40px',borderRadius:'50px'}} />
      </div>

     <div className="container">
     <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "55px", paddingTop: '30px' }}>Soil Type</h2>
            <p className="text-center " style={{ fontSize: "15px" ,marginBottom:'55px'}}>Include Information on soil conditions, watering frequency, and other factors</p>
       
        <div className="row">
          {/* {Soil.map((soil) => {
            return (
              <div className="col-md-4  " key={soil.id} style={{ marginTop: '20px' }}>
                <SoilTypeList soil={soil} />
              </div>
            );
          })} */}

          {Soil &&
           Soil.filter(soil => {
            if (search === '') {
                return soil;
            } else if (soil.name.toLowerCase().includes(search.toLowerCase())) {
                return soil;
            }
            }).map((soil, index) => {
            return (
                <div key={soil.id}>
                <SoilTypeList soil={soil}  />
                 </div>
            );})}
        </div>
      </div>

      
      </>

    )
  }
  export default SoilType;

    
