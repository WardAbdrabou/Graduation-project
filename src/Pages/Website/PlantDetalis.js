// import {data} from "../../data";
import CardDiseases from "../../Components/CardDiseases";
import { useEffect, useState } from "react";
import { AllSUITABLEPLANTS, PLANT, PLANTDETALI, baseURL, baseURL2 } from "../../Api/Api";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import Footer from "./Home/Footer";
// import CardSuitableP from "../../Components/CardSuitableP";

export default function PlantDetalis() {
    const params = useParams();
    // console.log(params);

    const [plant, setPlant] = useState({});
    const [palntDiseases, setpalntDiseases] = useState([]);
    

    //show item through id
    useEffect(() => {
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/${PLANT}/${params.plantId}`)
            .then((plant) => {
                setPlant(plant.data.crop)
                // console.log(plant.data.crop.diseases)/
                setpalntDiseases(plant.data.crop.diseases)
                console.log(plant.data.crop.diseases)

            
            });
    }, []);
    
    //disease related to plant
    // useEffect(() => {
    //     fetch(`${baseURL2}/${PLANTDETALI}`)
    //         .then((res) => res.json())
    //         .then((data) => setpalntDiseases(data));
    // }, []);

    return (
        <>
        <NavBar></NavBar>
            <h1 className="plantDetDes">Plant Details</h1>
            <div className=' d-flex align-content-center'>
                    <img src={plant.image}  alt="img" className="imgplantdetial col-4"/> 
                    <div className="contentplant col-4">
                        <h3 className="limitnumberh">
                            {plant.name}
                        </h3>

                        <p ><span className="fw-bold m-1">Fertilizers :</span>{plant.Fertilizers}</p>
                        <p ><span className="fw-bold m-1">Irrigation Method</span>{plant["Irrigation Method"]}</p>
                        <p ><span className="fw-bold m-1">Planting Method</span>{plant["Planting Method"]}</p>
                        <p ><span className="fw-bold m-1">Planting Tips</span>{plant["Planting Tips"]}</p>
                        <p ><span className="fw-bold m-1">Recommended Time</span>{plant["Recommended Time"]}</p>
                        {/* <Link to={`/product/${plant.id}`} showButton={true} className="btn-detail">Read More</Link>   */}
                    </div> 
                    
                </div>

            <div className="cards" id="cards">
                <h2 className="plantDetDessec">Plant Diseases </h2>
                <div className='container'>
                    {palntDiseases.map((plantdisease , index) => {
                        return (
                            <div key={plantdisease.disease_id}>
                                <CardDiseases plantdisease={plantdisease} showButton={true}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer></Footer>

        </>
    );
}