import { useEffect, useState } from "react";
import { baseURL} from "../../Api/Api";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import Footer from "./Home/Footer";


export default function TipDetalis() {
    const params = useParams();
    // console.log(params);

    const [tip , setTip] = useState({});
    
    //show item through id
    useEffect(() => {
        Axios.get(`${baseURL}/growing_tips/${params.tipId}`)
            .then((data) => {
                setTip(data.data.tip)
                // console.log(data.data.tip)
            });
    }, []);


    return (
        <>
        <NavBar></NavBar>
            <h1 className="plantDetDes">Growing Tips</h1>
            <div className=' d-flex align-content-center'>
                    <img src={tip.image}  alt="img" className="imgplantdetial col-4"/> 
                    <div className="contentplant col-4">
                        <h3 className="limitnumberh">
                            {tip.title}
                        </h3>
                        <p>{tip.body}</p>
                        {/* <Link to={`/growing_tips/${tip.id}`} showButton={true} className="btn-detail">Read More</Link>   */}
                    </div> 
                    
                </div>
                <Footer></Footer>
        </>
    );
}