import { Link } from "react-router-dom";
import "../Css/card.css";
import { DISEASE, DISEASES } from "../Api/Api";

export default function CardDiseasesDetection(props) {
    const { PlantDisease ,showButton } = props;
    return (        
                <div className='box'>
                    <img src={PlantDisease.image}  alt="img" className=""/> 
                    <div className="content">
                        <h3 className="limitnumberh">
                            {PlantDisease.name}
                        </h3>
                        <p className="limitnumber">{PlantDisease.description}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${DISEASES}/${DISEASE}/${PlantDisease.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> }
                    
                </div>
        );
}

