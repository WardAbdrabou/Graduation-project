import { Link } from "react-router-dom";
import "../Css/card.css";

export default function CardGrowingTips(props) {
    const { growingtip ,showButton } = props;
    return (        
                <div className='box'>
                    {/* <img src={growingtip.image}  alt="img"/>  */}
                    <div className="content">
                        <h3 className="limitnumberh">
                            {growingtip.title}
                        </h3>
                        <p className="limitnumber">{growingtip.slug}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/growing_tips/${growingtip.id}`}>Read More</Link>  
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div> }
                    
                </div>
        );
}

