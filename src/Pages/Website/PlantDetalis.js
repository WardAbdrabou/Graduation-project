import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllSUITABLEPLANTS, PLANT, baseURL } from './../../Api/Api';
import CardDiseases from "../../Components/CardDiseases";
import NavBar from "../../Components/NavBar";
import Footer from "./Home/Footer";
import { Axios } from "../../Api/axios";


function PlantDetalis() {
   const params = useParams();
//  console.log(params);

    const [plant, setPlant] = useState({});
    const [palntDiseases, setpalntDiseases] = useState([]);
    


    useEffect(() => {
                Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/${PLANT}/${params.plantId}`)
                     .then((plant) => {
                         setPlant(plant.data.crop)
                         console.log(plant.data.crop)
                         setpalntDiseases(plant.data.crop.diseases)
                        // console.log(plant.data.crop.diseases)
        
                    
                     })     }, []);
    

    return (
        <>

<NavBar></NavBar>
            <div className="heade" style={{width:"75%"}}>
                <h1 style={{fontSize:'50px'}}>Plant Detalis</h1>
            </div>
            {/* <h2 style={{ color: '#6f9A61', fontSize: '40px',fontWeight:'bold' }}>{plant.name}</h2> */}
            
            <div className="about-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={plant.image} alt="chosse us" style={{ width: '100%',borderRadius:'15px',minHeight:'400px' }}/>
                    </div>

                    <div className="col-md-6" style={{ paddingTop: '8px' }} >
                    <h2 style={{ color: '#6f9A61', fontSize: '40px',fontWeight:'bold' }}>{plant.name}</h2>

                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500'  }}>Fertilizers</h2>

                        <p style={{fontSize:'18px'}}> {plant.Fertilizers}</p>
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>Planting Method </h2>
                        <p style={{fontSize:'18px'}}> {plant["Planting Method"]}</p>  
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>Irrigation Method </h2>
                        <p style={{fontSize:'18px'}}> {plant["Irrigation Method"]}</p>   
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>Moisture </h2>
                        <p style={{fontSize:'18px'}}> {plant.Moisture}</p>  
                        

                        
                    </div>
                    <h2 style={{ color: '#6f9A61', fontSize: '23px',fontWeight:'500' }}>Planting Tips</h2>
                    <p style={{fontSize:'18px'}}> {plant["Planting Tips"]}</p> 
                    <div className="col-md-12" style={{marginTop:'30px'}}>
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>water requirement </h2>
                        <p style={{fontSize:'18px'}}> {plant["water requirement"]}</p>     
                    </div>
                    {/* <div className="col-md-6" style={{marginTop:'30px'}}>    
                        <h2 style={{ color: '#6f9A61', fontSize: '29px',fontWeight:'bold' }}>Planting Tips</h2>
                        <p style={{fontSize:'18px'}}> {plant["Planting Tips"]}</p>
                    </div> */}
                    

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
    )
}

export default PlantDetalis