import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../Components/NavBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Home/Footer";

export default function ThanksApplying(){
    return(
        <>
        <NavBar></NavBar>
        <div className="parent">
        <div className="register login">
            <form style={{width:"400px" , backgroundColor:"white"}}>
              <div style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6F9A61", fontSize:"70px"}} className='mb-4'/>
                <h4 style={{ marginBottom: "20px" , fontSize:"40px" , fontWeight:"bold"}}>Thank You</h4>
                <p className="pAcount" style={{ marginBottom: "30px" , fontSize:"18px"}}>Your Application was successfully submitted
                </p>
                <span className="pAcount" style={{ marginBottom: "30px" , color:'#858484' , fontSize:"16px"}}>We will contact you when a decision is made</span>

              </div>
           </form>
        </div>
     </div>
     <Footer></Footer>

        </>
    )
}