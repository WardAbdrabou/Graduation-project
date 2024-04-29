import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../Api/axios";
import { baseURL } from "../../Api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../Components/NavBar";

export default function BuyingMembership(){
    const params = useParams();
    const [buyMembership , setbuyMembership] = useState("")

    useEffect(() => {
        Axios.get(`${baseURL}/membership/${params.membershipId}`)
            .then((data) => setbuyMembership(data.data));
    }, []);
    

    return(
        <>
<NavBar></NavBar>
              <div className="parent">
        <div className="register login">
            <form style={{width:"400px" , backgroundColor:"white"}}>
              <div style={{ textAlign: "center" }}>
              < FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6F9A61", fontSize:"60px"}} className='mb-4 mt-2'/>
                <h4 style={{ marginBottom: "20px" , fontSize:"30px" , fontWeight:"bold"}}>congratulations</h4>
                <p className="pAcount" style={{ marginBottom: "30px" , fontSize:"18px"}}>  {buyMembership.message}
                </p>

              </div>
           </form>
        </div>
     </div>
     </>

    );
}