import {  useEffect, useState } from "react";
import CardConsultation from '../../Components/CardCons';
import "../../Css/card.css";
import { CONSUL, PROFILE } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import NavBar from "../../Components/NavBar";
import { useNavigate} from "react-router-dom";
import Footer from "./Home/Footer";
// import axios from "axios";

// Consultation Item
export default function Consultation() {

    const [consultations, setconsultations] = useState([]);
    const nav = useNavigate()

    // useEffect(() => {
    //     Axios.get(`/${PROFILE}`)
    //       .then((dataprofile) => {
    //         // setmembership_level_id(dataprofile.data.user.membership_level_id)
    //         // setfree_trails(dataprofile.data.user.free_trails)
    //         // console.log(dataprofile.data.user)
    //       })            
    //   }, []);

    useEffect(() => {
        Axios.get(`/${CONSUL}`)
          .then((data) => {
            setconsultations(data.data.instructors.data)
             console.log(data.data)
          })
          .catch(() => nav('/404', { replace: true }));
      }, []);


    return (
        <>
        <NavBar></NavBar>
            <div className="team" id="team">
            <h2 className="main-title text-center"> Our Consultation</h2>
            <p className="main-titlep text-center">you Can connect with our expert team members for personalized assistance.</p>
            <div className="container" >
                    {consultations.map((consultation) => {
                        return (
                            <div key={consultation.id}>
                                <CardConsultation consultation={consultation} />  
                            </div>

                        );
                    })}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
