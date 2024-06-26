import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from './../../../Api/axios';
import SoilCrop from "./SoilCrop";
import NavBar from "../../../Components/NavBar";
import Footer from "../Home/Footer";


function SoilTypeDetails(soilTypeId) {
    const [Soil, setSoil] = useState({});
    const [cropDetails, SetCrop] = useState([]);
    const params = useParams();

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/soils/soil/${params.soilTypeId}`)
            .then((data) => {
                console.log(data.data.soil);
                setSoil(data.data.soil)
                SetCrop(data.data.soil.crops)
                console.log(data.data.soil.crops);
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    

    return (
        <>

<NavBar></NavBar>
            <div className="heade" style={{width:"75%"}}>
                <h1 style={{color:"#6f9A61",fontSize:'50px',fontWeight:'bold'}}>{Soil.name} Soil</h1>
                {/* <p style={{color:'gray'}}> "{Soil.properties}"</p> */}
            </div>

            <div className="about-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Soil.image} alt="chosse us" style={{ width: '100%',borderRadius:'15px',minHeight:'400px' }} />
                    </div>
                    <div className="col-md-6" style={{ paddingTop: '8px' }} >
                       
                            {/* <h2 style={{ color: '#6f9A61', fontSize: '35px' }}>  {Soil.name} Soil</h2> */}
                           
                            <h2 style={{ color: '#6f9A61', fontSize: '29px',fontWeight:'bold' }}>Describtion </h2>
                           
                        <p style={{fontSize:'18px'}}>{Soil.properties}</p>
                        
                        <h2 style={{ color: '#6f9A61', fontSize: '29px',fontWeight:'bold' }}>suitable Plants </h2>
                        <p style={{fontSize:'18px'}}> {Soil.suitable_crops}</p>

                        
                    </div>
                    
                    <div className="col-md-12" style={{marginTop:'30px'}}>
                        <h2 style={{ color: '#6f9A61', fontSize: '29px' ,fontWeight:'bold' }}>properties </h2>
                        <p style={{fontSize:'18px'}}> {Soil.additional_notes}</p>     
                    </div>

                    <div className="col-md-6" style={{marginTop:'30px'}}>
                        <h2 style={{ color: '#6f9A61', fontSize: '29px' ,fontWeight:'bold' }}>Recommended Water </h2>
                        <p style={{fontSize:'18px'}}> {Soil.Recommended_Water}</p>     
                    </div>
                    <div className="col-md-6" style={{marginTop:'30px'}}>    
                        <h2 style={{ color: '#6f9A61', fontSize: '29px',fontWeight:'bold' }}>Recommended Fertilizers </h2>
                        <p style={{fontSize:'18px'}}> {Soil.Recommended_Fertilizers}</p>
                    </div>
                    <div className="col-md-6" style={{marginTop:'30px'}}>    
                        <h2 style={{ color: '#6f9A61', fontSize: '29px',fontWeight:'bold' }}>Recommended Fertilizers </h2>
                        <p style={{fontSize:'18px'}}> {Soil.Recommended_Fertilizers}</p>
                    </div>
                    

                </div>
                
                    
                </div>
                <div className="cards">
                    <div className="heade">
                        <h1  className="text-center" style={{ color: "#6F9A61", fontSize: "50px", paddingTop: '30px',fontWeight:'bold' }}>
                            Suitable Plants</h1>
                    </div>     
                    <div className="container">
                        {cropDetails.map((crops) => {
                          return (
                            <div key={crops.id}>
                                <SoilCrop crops={crops} showButton={true}/>
                            </div>
                        );
                        })}
                    </div>
                </div>



          <Footer></Footer>

        </>
    )
}

export default SoilTypeDetails