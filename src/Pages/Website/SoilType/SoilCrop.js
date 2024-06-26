import React from 'react';

 function SoilCrop(props) {
    const{crops , showButton} = props;
   
     return(
        <>
        
         
            <div className="box" style={{height:"370px"}}>
           <img src={crops.image} />
          
           <div className="contentbox">
           <h3 className="limitnumberh">
                            {crops.name} </h3>
               <p  >{crops["Planting Method"]}</p> 
              </div>
             

        </div>
           
         
         </>
    )
  }
  export default SoilCrop;