import React from 'react';
import EastIcon from '@mui/icons-material/East';
  import soildetect from './../../assets/soildetect .png';
  import GrowingTipsDetails from './GrowingTipsDetails';
  import { Link } from "react-router-dom";
  // import { useState } from 'react';

 function GrowingTipsList(props) {
    const{Growing} = props;
    // const [Growings, setGrowing] = useState([]);
     return(
        <>
         <div className="card" style={{width:'400px',borderRadius:'20px' }}>
           <img src={Growing.image} style={{minHeight:'200px',borderRadius:'16px 16px 0 0'}}/>
           {/* <img src={Growing.image}/> */}
             <div className="c-contain" style={{backgroundColor:'#fff'}}>
                <h4 className='header' 
                style={{color:'#6f9A61',marginLeft:'8px', marginTop:'10px',fontWeight:'bold',fontSize:'18px',display:'flex',justifyContent:'center', paddingTop:'5px',overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box", WebkitLineClamp:" 1", lineClamp: "1",WebkitBoxOrient: "vertical"}}>
                  
                    {Growing.title}
                </h4>
                 <p className='text' style={{fontSize:'17px',borderBottom:'2px solid #ddd',color:'gray',overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box", WebkitLineClamp:" 2", lineClamp: "2",WebkitBoxOrient: "vertical"}}>{Growing.slug}</p>
                  {/* Read More => div=>marginbottom 4px */}
                 <div className='growbm' style={{marginTop:'0',display:'flex',justifyContent:'space-between'}}>
                 <Link to={`/GrowingTips/${Growing.id}`} key={Growing.id} style={{textDecoration:'none',fontWeight:'bold',color:"#6f9A61",fontSize:'18px',marginLeft:"20px"}}>
                     Read More
                </Link>
                
                <h3 style={{marginRight:'20px',color:"#6F9A61"}}>
                <Link to={`/GrowingTips/${Growing.id}`} key={Growing.id} style={{textDecoration:'none',fontWeight:'bold',color:"#6f9A61",fontSize:'18px'}} >
                <EastIcon />
                </Link>
                </h3>

                </div>
                
             </div>

        </div>
         </>
    )
  }
  export default GrowingTipsList;