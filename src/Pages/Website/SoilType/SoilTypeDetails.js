import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Axios } from './../../../Api/axios';
import NavBar from "../../../Components/NavBar";



function SoilTypeDetails(soilTypeId) {
    const [Soil, setSoil] = useState([]);
    const params = useParams();

    useEffect(() => {
        // fetch(`${api_url}/${params.GrowingTipsId}`)
        //     .then((res) => res.json())
        //     .then((data) => setGrowing(data));

        Axios.get(`http://127.0.0.1:8000/api/soils/soil/${params.soilTypeId}`)
            .then((data) => {
                console.log(data.data.soil);
                setSoil(data.data.soil)
            })

            .catch((error) => {
                console.log(error);
            });




    }, []);

    return (
        <>
            {/* new */}
            <div className="heading">
                <h1>Soil Details</h1>
                {/* <p>   {Soil.name}</p> */}
            </div>

            <div className="about-container">
                <div className="row">
                    <div className="col-md-6">
                        {/* <img src={aboutUs} alt="chosse us" style={{ width: '100%' }} /> */}
                    </div>
                    <div className="col-md-6" style={{ paddingTop: '8px' }} >
                       
                            <h2 style={{ color: '#6f9A61', fontSize: '35px' }}>  {Soil.name} Soil</h2>
                           
                        
                        <p>{Soil.properties}</p>
                        <p>{Soil.additional_notes}</p>
                        {/* <div className="body">
                        {Soil.properties}
                        </div> */}
                    </div>

                    <div className="col-md-6" style={{marginTop:'30px'}}>
                        <h2 style={{ color: '#6f9A61', fontSize: '25px' }}>Recommended Water :-</h2>
                        <p> {Soil.Recommended_Water}</p>     
                    </div>
                    <div className="col-md-6" style={{marginTop:'30px'}}>    
                        <h2 style={{ color: '#6f9A61', fontSize: '25px' }}>Recommended Fertilizers :-</h2>
                        <p> {Soil.Recommended_Fertilizers}</p>
                    </div>
                    <div className="col-md-12">
                        <h2 style={{ color: '#6f9A61', fontSize: '25px' }}>suitable_crops :-</h2>
                        <p> {Soil.suitable_crops}</p>
                    </div>

                </div>
                
                    
                </div>


          

        </>
    )
}

export default SoilTypeDetails;


