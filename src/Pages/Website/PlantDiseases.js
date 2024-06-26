import { useEffect, useState } from "react";
import { DISEASES} from "../../Api/Api";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import Footer from "./Home/Footer";
import { useParams } from "react-router-dom";

export default function PlantDiseases(props) {

    const params = useParams();
    const [disease, setDisease] = useState({});
  
    useEffect(() => {
        Axios.get(`/${DISEASES}/${params.diseaseId}`)
            .then((disease) => {
                setDisease(disease.data.disease)
                console.log(disease.data)
            });
    }, []);

    

    return (
        <>

<NavBar></NavBar>
            <div className="heade" style={{width:"75%"}}>
                <h1 style={{fontSize:'40px',fontWeight:'bold'}}>Disease Detalis</h1>
            </div>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={disease.image} alt="chosse us" style={{ width: '100%',borderRadius:'15px',minHeight:'400px' }}/>
                    </div>

                    <div className="col-md-6" style={{ paddingTop: '8px' }} >
                        <h2 style={{ color: '#6f9A61', fontSize: '40px',fontWeight:'bold' }}>{disease.name}</h2>
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>Description :</h2>

                        <p style={{fontSize:'18px'}}> {disease.description}</p>
                        <h2 style={{ color: '#6f9A61', fontSize: '23px' ,fontWeight:'500' }}>Prevention :</h2>
                        <p style={{fontSize:'18px'}}> {disease.Prevention}</p>  
                      

                        
                    </div>
                    <h2 style={{ color: '#6f9A61', fontSize: '23px',fontWeight:'500' , marginTop:"30px"}}>Treatment : </h2>
                    <p style={{fontSize:'18px'}}> {disease.Treatment}</p> 
                  
                    

                </div>
                
                    
                </div>
              
          <Footer></Footer>

        </>
    )
}



