import React from 'react';
import { Link } from "react-router-dom";
// import Footer from '../Home/Footer';
 


 function SoilTypeList(props) {
    const{soil} = props;
    // const [Growings, setGrowing] = useState([]);
     return(
        <>
        {/* <div className='cards'> */}
          {/* <div className='container'> */}
          <div className='box'>
        <img src={soil.image}  alt="img"/> 
                    <div className="content">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                        {soil.name}
                        </h3>
                        {/* <p className="limitnumber">{suitablePlant["Planting Method"]}</p> */}
                    </div>
                    { <div className="infoPlant">
                        
                        <Link to={`/SoilType/${soil.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> }
         </div>
                {/* </div> */}
        {/* </div> */}
        
         </>
    )
  }
  export default SoilTypeList;
