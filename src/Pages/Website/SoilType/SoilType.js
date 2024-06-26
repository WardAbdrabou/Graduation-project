import React from "react";
import { useEffect, useState } from "react";
import { Axios } from './../../../Api/axios';
import SoilTypeList from "./SoilTypeList";

import soilType from '../../../assests/plant-leaf 1.png';
import upload from '../../../assests/upload.png'
import vector from '../../../assests/Vector.png';
import NavBar from "../../../Components/NavBar";
import Footer from "../Home/Footer";





function SoilType() {
  const [Soil, setSoil] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSoil, setFilteredSoil] = useState([]);
  const [fileup, setfileup] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/soils")
      .then((data) => {
        console.log(data.data);
        setSoil(data.data);
        setFilteredSoil(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function HandleSubmit() {
    setLoading(true);
    // قيمة ثابتة لتجربة التصفية
    const soilName = "Clay".toLowerCase();
    const matchedSoil = Soil.filter(soil => soil.name.toLowerCase() === soilName);
    setFilteredSoil(matchedSoil);
    setLoading(false);
  }

  const handleFileChange = (e) => {
    const file = e.target.files.item(0);
    setfileup(file);
    HandleSubmit();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = Soil.filter(soil => soil.name.toLowerCase().includes(searchTerm));
    setFilteredSoil(filtered);
  };

  return (
    <>
    <NavBar></NavBar>
      <div className="text-center" style={{ width: '100%', backgroundColor: 'rgba(238, 238, 238, 0.5)' }}>
        <div>
          <img src={soilType} alt='not found' style={{ marginTop: '40px' }} />
          <img src={vector} alt='not found' style={{ marginTop: '195px', marginLeft: '-26px' }} />
        </div>
        <p style={{ color: "#6F9A61", fontSize: "44px", fontWeight: 'bold' }}>Identify Soil For Free</p>
        <p style={{ color: "black", fontSize: "26px" }}>You Can Take a photo or search by soil name</p>
        <input 
          placeholder="Enter Common Name" 
          onChange={handleSearchChange} 
          style={{ width: '50%', marginBottom: '40px', borderRadius: '50px' }} 
        />
        <input 
          id="file-upload" 
          className="image-upload" 
          onChange={handleFileChange} 
          type="file" 
          style={{ display: 'none' }} 
        />
        <label htmlFor="file-upload" style={{ cursor: 'pointer', marginLeft: '-55px' }}>
          <img src={upload} alt="Upload Icon" />
        </label>
      </div>

      <div className="cards">
        <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "57px", paddingTop: '30px', fontWeight: 'bold' }}>Soil Type</h2>
        <p className="text-center" style={{ fontSize: "16px", marginBottom: '55px', color: 'gray' }}>
          "Detect The type of the soil, Know information about every soil and 
          Know <br />the best plant rely on the type soil"
        </p>
        <div className="container">
          {filteredSoil &&
            filteredSoil.map((soil, index) => (
              <div key={soil.id}>
                <SoilTypeList soil={soil} />
              </div>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
export default SoilType;