import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { PROFILE} from "../../Api/Api";
import Loading from "../../Components/Loading";
import { Axios } from "../../Api/axios";
import Err403 from "./403";

export default function RequireAuthMember({ allowedMemberShip}) {
    //User
    const [user, setUser] = useState("");
    // console.log(user);
    const Navigate = useNavigate();

    useEffect(() => {
        Axios.get(`/${PROFILE}`)
            .then((data) => setUser(data.data.user))
            .catch(() => Navigate("/login", {replace: true}));
    }, []);

    //Token & cookie
    const cookie = Cookie();
    const token = cookie.get("e-commerce");


    return user.membership_level_id === "1" ? (
        user.free_trails === 3 || 2 || 1 ? (
            <> 
            <Loading></Loading>
            <Outlet></Outlet>
            </>
        ) :  user.free_trails === 0 ? (
            <>
            <Err403 free_trails={user.free_trails}></Err403>
            <Navigate to="/membership"></Navigate>
            </>
        )  : (
      <Outlet></Outlet>        
      )
        ) : (
        <Outlet></Outlet>
        );
}
