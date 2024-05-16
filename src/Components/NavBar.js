import { Link, Navigate } from "react-router-dom";
import Cookie from 'cookie-universal';
import { Axios } from "../Api/axios";
import { Dropdown } from "react-bootstrap";
import {useEffect, useState } from "react";
import { PROFILE} from "../Api/Api";
import logo from "../assests/logo4.png"
// import axios from "axios";
// import Service from './../Pages/Website/Service';

export default function NavBar() {

    const cookie = Cookie();
    const token = cookie.get("e-commerce");
    // console.log(token);
    
    const [name, setName] = useState("");
    const [is_admin, setIs_admin] = useState("");

    async function fetchData() {
        try {
            if (!token) {
                return;
            }
            Axios.get(`/${PROFILE}`)
            .then((data) => {
                setName(data.data.user.name)
                console.log(data.data.user)
                setIs_admin(data.data.user.is_admin)
            })       
            .catch(() => Navigate("/login", {replace: true}));
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

   
    async function handleLogout() {
        try {
            const res = await Axios.post(`http://127.0.0.1:8000/api/logout`);
            cookie.remove("e-commerce");
            window.location.pathname = "/login";
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="">
            <div className="navbar p-2 container">
            <img src={logo} className="logo"></img>
                <div className="d-flex flex-1 ">
                    
                    <Link to="/">Home</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/service">Community</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contact">contact Us</Link>

                </div>
                <div className="d-flex">
                    {!token ? (
                        <>
                            <Link
                                to="/register"
                                style={{ textAlign: "center", marginRight:"10px" }}
                                className="btn-dashboard"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                style={{ textAlign: "center" }}
                                className="btn-dashboard"
                            >
                                Login
                            </Link>
                        </>
                    ) : (<> {is_admin === 1 ? <Link
                        to="/dashboard/posts"
                        style={{ textAlign: "center" }}
                        className="btn-dashboard"
                    >
                        Dashboard
                    </Link> : ' '}
                        <Dropdown className="mt">
                            <Dropdown.Toggle variant=" button-color text-white bg-black " >
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/profile' style={{textDecoration:"none" , color:"black"}}>my Profile</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/membership' style={{textDecoration:"none" , color:"black"}}>MemberShip</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/hiring' style={{textDecoration:"none" , color:"black"}}>Apply for hiring</Link>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout} className="bgcolor">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> </>)}
                </div>
            </div>
        </div>
    );
}