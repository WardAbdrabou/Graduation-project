import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import Footer from "./Home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function MemberShip() {
    const [memberShips, setMemberShips] = useState([]);

    useEffect(() => {
        Axios.get(`/membership`)
            .then((data) => {
                setMemberShips(data.data.levels)
                console.log(data.data.levels)
            });
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <div >
                <div class="pricing p-3" id="pricing">
                    <h2 class="main-title" >Subscription</h2>
                    <div class="contmember">
                        {memberShips.map((memberShip) => {
                            const price = memberShip.Price.split('//')
                            const Benefits = memberShip.Benefits.split('\n')
                            // const Features = memberShip.Benefits.split('\n')
                            // console.log(Benefits)
                            return (
                                <div key={memberShip.id}>
                                    <div class="box">
                                        <h3 class="title">{memberShip.name}</h3>
                                        <ul type="none" >
                                            <li className="m-2">
                                            <FontAwesomeIcon  icon={faCircleCheck} className="icon-sub" style={{ color: "#6F9A61", fontSize:"20px", fontWeight:"normal"}}/>
                                            {Benefits[0]}
                                            </li>
                                            <li className="m-2">
                                            <FontAwesomeIcon  icon={faCircleCheck} className="icon-sub" style={{ color: "#6F9A61", fontSize:"20px"}}/>{Benefits[1]}
                                            </li>
                                        </ul>
                                        <div class="price mt-5">
                                            <span class="amount">{price[0]}</span>                                            
                                            <span class="time"> {price[1]}</span>
                                        </div>
                                        <div className="text-center" style={{marginLeft:"-30px"}}>
                                        <Link to={`/membership/${memberShip.id}`} style={{background:"none", border:"none"}}>
                                        <a href="">Buy Now</a>
                                        </Link>
                                        </div>
                                        
                                    </div>
                                   
                                    </div>

                            );
                        })}

                    </div>
                </div>
            </div>
            <Footer></Footer>

            

        </>
    )
}