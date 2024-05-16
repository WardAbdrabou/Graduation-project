// import React from 'react';
// import EastIcon from '@mui/icons-material/East';
//   import soildetect from './../../../assests/soildetect .png';
//   import { Link } from "react-router-dom";

//  function GrowingTipsList(props) {
//     const{Growing} = props;
//     // const [Growings, setGrowing] = useState([]);
//      return(
//         <>
        
//          <div className="card" style={{width:'400px' }}>
//            <img src={soildetect}/>
//            {/* <img src={Growing.image}/> */}
//              <div className="c-contain" style={{backgroundColor:'#fff'}}>
//                 <h4 className='header' style={{color:'#6f9A61',marginLeft:'15px', marginTop:'10px',fontSize:'18px',disdlay:'flex',justifyContent:'center', paddingTop:'5px'}}>
//                     {/* Soil Detection{Growing.slug} */}
//                     {Growing.title}
//                 </h4>
//                  <p className='text' style={{padding:'7px',borderBottom:'2px solid #ddd'}}>{Growing.category.id.slug}</p>
//                   {/* Read More => div=>marginbottom 4px */}
//                  <div className='growbm' style={{marginTop:'0',display:'flex',justifyContent:'space-between'}}>
//                  <Link to={`/GrowingTips/${Growing.id}`} key={Growing.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px',marginLeft:"20px"}}>
//                      Read More
//                 </Link>
                
//                 <h3 style={{marginRight:'20px',color:"#6F9A61"}}>
//                 <Link to={`/GrowingTips/${Growing.id}`} key={Growing.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px'}} >
//                 <EastIcon />
//                 </Link>
//                 </h3>

//                 </div>
                
//              </div>

//         </div>
//          </>
//     )
//   }
//   export default GrowingTipsList;
