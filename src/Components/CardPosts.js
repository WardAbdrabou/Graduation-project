import { Link } from "react-router-dom";
import { AllSUITABLEPLANTS, PLANT } from "../Api/Api";
import "../Css/card.css";
// import { AllSUITABLEPLANTS, PLANT } from "../Api/Api";
import EastIcon from '@mui/icons-material/East';

export default function CardPosts(props) {
    const { post ,showButton } = props;
    return (       <>
                <div className='box mt-5 d-block'>
                    <img src={post.image}  alt="img" className="img"/> 
                    <div className="contentbox">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                            {post.title}
                        </h3>
                      
                        <p className="limitnumbe">{post.slug}</p>
                        <p className="limitnumbe">{post.body}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${AllSUITABLEPLANTS}/${PLANT}/${post.id}`}>Read More</Link>  
                        <EastIcon className="icon"/>           
                        </div> }
                    
                </div>
                 
              </> 
        );
}

