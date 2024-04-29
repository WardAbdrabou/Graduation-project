import React from 'react';
import EastIcon from '@mui/icons-material/East';
  import soildetect from '../../../assests/soildetect .png';

  // import GrowingTipsDetails from './../GrowingTipsDetails';

  import { Link } from "react-router-dom";
 
  // import SoilType from './SoilType';
  // import SoilTypeDetails from './SoilTypeDetails';/

 function SoilTypeList(props) {
    const{soil} = props;
    // const [Growings, setGrowing] = useState([]);
     return(
        <>
           
         <div className="card" style={{width:'400px' }}>
           <img src={soildetect}/>
           {/* <img src={Growing.image}/> */}
             <div className="c-contain" style={{backgroundColor:'#fff'}}>
                <h4 className='header' style={{color:'#6f9A61',fontSize:'30px',borderBottom:'2px solid #ddd',paddingBottom:'10px',textAlign:'center', paddingTop:'10px'}}>
                   
                  {soil.name}
                </h4>
                 {/* <p className='text' style={{padding:'7px',borderBottom:'2px solid #ddd'}}>ppppppppp</p> */}
                  {/* Read More => div=>marginbottom 4px */}
                 <div className='growbm' style={{marginTop:'0',display:'flex',justifyContent:'space-between'}}>
                 <Link to={`/SoilType/${soil.id}`} key={soil.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px',marginLeft:"20px"}}>
                     Read More
                </Link>
                
                <h3 style={{marginRight:'20px',color:"#6F9A61"}}>
                <Link  to={`/SoilType/${soil.id}`} key={soil.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px'}} >
                <EastIcon />
                </Link>
                </h3>

                </div>
                
             </div>

        </div>
         </>
    )
  }
  export default SoilTypeList;
