import { Link } from "react-router-dom";
import "../Css/card.css";
import EastIcon from '@mui/icons-material/East';


export default function CardGrowingTips(props) {
    const { growingtip ,showButton } = props;
    return (        
                <div className='box mt-5'>
                    <img src={growingtip.image}  alt="img"/> 
                    <div className="contentbox">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                            {growingtip.title}
                        </h3>
                        <p className="limitnumber">{growingtip.slug}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/growing_tips/${growingtip.id}`}>Read More</Link>  
                        <EastIcon className="icon"/>

                    </div> }
                    
                </div>
        );
}

