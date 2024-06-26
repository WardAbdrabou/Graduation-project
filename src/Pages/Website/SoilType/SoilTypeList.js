import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";


function SoilTypeList(props) {
  const { soil } = props;
  // const [Growings, setGrowing] = useState([]);
  return (
    <>

      <div className="box" >
        <img src={soil.image}  />
        {/* <img src={Growing.image}/> */}
        <div className="contentbox" >
          <h4 className="limitnumberh" style={{fontWeight:"bold"}}>
            {soil.name}
          </h4>
          <p className="limitnumber">{soil.Recommended_Water}</p>
        
         

        </div>
        <div className='infoPlant' >
          <Link to={`/SoilType/${soil.id}`}>Read More</Link>  
          <EastIcon className="icon"/>
          </div>

      </div>
    </>
  )
}
export default SoilTypeList;