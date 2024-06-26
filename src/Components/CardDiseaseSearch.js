import { Link } from "react-router-dom";
import "../Css/card.css";
import EastIcon from '@mui/icons-material/East';

import { DISEASE, DISEASES } from "../Api/Api";

export default function CardDiseasesSearch(props) {
    const { Plantname ,showButton } = props;
    return (        
                <div className='box'>
                    <img src={Plantname.image}  alt="img" /> 
                    <div className="contentbox">
                        <h3 className="limitnumberh">
                            {Plantname.name}
                        </h3>
                        <p className="limitnumber">{Plantname.description}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${DISEASES}/${DISEASE}/${Plantname.id}`}>Read More</Link>  
                        <EastIcon className="icon"/>
                    </div> }
                    
                </div>
        );
}

