import React, { useState } from "react";
import sensor from "../../assests/sensor.png";
import Footer from "./Home/Footer";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import Switch from "react-input-switch";

export default function Sensor() {
  const [sensorData, setsensorData] = useState([]);
  const [value, setValue] = useState("yes");

  <Switch
    styles={{
      track: {
        backgroundColor: "blue",
      },
      trackChecked: {
        backgroundColor: "red",
      },
      button: {
        backgroundColor: "yellow",
      },
      buttonChecked: {
        backgroundColor: "blue",
      },
    }}
  />;

  async function HandleSubmit(e) {
    // setLoading(true);
    e.preventDefault();
    const form = new FormData();
    form.append("message", sensorData);
    try {
      const res = await Axios.get(`http://127.0.0.1:5000/data`, form);
      console.log(res.data);
      // setLoading(false);
      // window.location.pathname = `/diseases/disease/${soilname}`;
    } catch (err) {
      // setLoading(false);
      console.log(err);
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="sensor" id="sensor">
        <div className="container d-flex align-items-center justify-content-between d-small">
          <div className="col-5 headersensor">
            <p className="sensor-titlep">Welcome to our Website</p>
            <h2 className="headers">Water sensor </h2>
            <p className="sensor-title">
              If you want to buy sensor please click this button
            </p>
            <button className="register-navBar btn-sensor">Buy</button>

            {/* <p>
              {" "}
              <input
                onChange={(e) => setsensorData(e.target.value)}
                type="checkbox"
              />
            </p> */}
            {/* <button type="submit" className="btn-upload" onClick={HandleSubmit}>start</button>

            
            <Switch
                on="yes"
                off="no"
                value={value}
                onChange={setValue}
                onClick={HandleSubmit}
              /> */}

           

          </div>
          <div>
            <img src={sensor} alt="img" class="infoSen"></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
