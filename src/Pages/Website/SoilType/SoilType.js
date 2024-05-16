import React from "react";
import { useEffect, useState } from "react";
import vector from "./../../../assests/Vector.png"

// import './GrowingTips.css';

// ward
import { Axios } from './../../../Api/axios';

// import { Grow , baseURL } from './../../Api/Api';
import SoilTypeList from "./SoilTypeList";
import soilType from './../../../assests/plant-leaf 1.png';
import NavBar from "../../../Components/NavBar";
import Footer from "../Home/Footer";

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
      <div className="sec2det text-center">
                    <img className="img-diseases" alt='not found' src={soilType}></img>
                    <img className="img-diseases vec" src={vector}></img>
          {/* <img src={soilType} alt='not found'style={{marginTop:'40px'}}/> */}
          <p  className="main-title-diseases">Identify Soil For Free</p>
          <p className="main-titlep-diseases">You Can Take a photo or search by soil name</p>
          <br/>
          <input placeholder="Enter Common Name"  onChange={event => setSearch(event.target.value)} className="searchDiseases"/>
          <br/>
      </div>
      {/* <div className="text-center mt-5">
                            <input className="image-upload" onChange={(e) => setfileup(e.target.files.item(0))}
                                type="file" />
                            <button type="submit" className="btn-upload" onClick={HandleSubmit}>predict</button>

                        
                        </div> */}

     <div className="cards">
     <h2 className="main-title text-center" >Soil Type</h2>
            <p className="main-titlep">Include Information on soil conditions, watering frequency, and other factors</p>
       
        <div className='container'>
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

      <Footer></Footer>

      </>

    )
  }
  export default SoilType;

    
