import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import GrowingDetails from './../../../assests/GrowingTipsDetails.png';
import aboutUs from './../../../assests/aboutUs.png';
import { Axios } from "../../../Api/axios";
// import axios from "axios";


function GrowingTipsDetails(GrowingTipsId) {
    
    // const api_url = "http://127.0.0.1:8000/api/growing_tips";
    const [Growing, setGrowing] = useState({});
    const params = useParams();

    useEffect(() => {
        // fetch(`${api_url}/${params.GrowingTipsId}`)
        //     .then((res) => res.json())
        //     .then((data) => setGrowing(data));

        Axios.get(`http://127.0.0.1:8000/api/growing_tips/${params.GrowingTipsId}`)
        .then((data )=> {
            console.log(data.data.tip);
            setGrowing(data.data.tip)})

        .catch((error) => {
            console.log(error);
        });
        
       
        
       
    }, []);

    return (
        <>
           

            {/* new */}
            <div className="heading">
                <h1>Growing Tips</h1>
                <p>{Growing.slug} </p>
            </div>
            
            <div className="about-container">
              <div className="row">
                 <div className="col-md-6">
                   <img src={aboutUs} alt="chosse us"style={{width:'550px'}} />
                 </div>
                 <div className="col-md-6" style={{paddingTop:'8px'}} >
                   <div className="title" style={{display:'flex',justifyContent:'space-between'}}>
                    <h2 style={{ color: '#6f9A61', fontSize: '25px'}}> {Growing.title}</h2>
                    <h5 style={{color:'gray',fontSize: '15px'}}>By Ahmed
                        {/* {Growing.user.name} */}
                    </h5>
                  </div> 
                  <p>{Growing.slug}</p>
                  <div className="body">
                    {Growing.body}
                  </div>
              
             
              </div>
            </div>
          

            </div>

        </>
    )
}

export default GrowingTipsDetails;
