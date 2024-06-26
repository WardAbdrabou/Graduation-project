import { Link } from "react-router-dom";
import "../Css/card.css";
import { DISEASE, DISEASES } from "../Api/Api";
import EastIcon from '@mui/icons-material/East';


export default function CardDiseases(props) {
    const { plantdisease ,showButton  } = props;
    return (        
                <div className='box'>
                    <img src={plantdisease.image}  alt="img"/> 
                    <div className="contentbox">
                        <h3 className="limitnumberh" >
                            {plantdisease.name}
                        </h3>
                        <p className="limitnumber">{plantdisease.description}</p>
                    </div>
                    {showButton && <div className="infoPlant">

                        <Link to={`/${DISEASES}/${plantdisease.disease_id}`}>Read More</Link>  
                        <EastIcon className="icon"/>
                    </div> } 
                </div>
        );
}

