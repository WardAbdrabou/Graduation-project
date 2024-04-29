import { Link } from "react-router-dom";
import "../Css/card.css";
import { AllSUITABLEPLANTS, PLANT } from "../Api/Api";

export default function CardSuitableP(props) {
    const { suitablePlant ,showButton } = props;
    return (        
                <div className='box'>
                    <img src={suitablePlant.image}  alt="img"/> 
                    <div className="content">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                            {suitablePlant.name}
                        </h3>
                        <p className="limitnumber">{suitablePlant["Planting Method"]}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${AllSUITABLEPLANTS}/${PLANT}/${suitablePlant.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> }
                    
                </div>
        );
}

