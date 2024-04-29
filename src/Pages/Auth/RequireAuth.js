import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { PROFILE} from "../../Api/Api";
import { Axios } from "../../Api/axios";
import Err403 from "./403";
import Loading from "../../Components/Loading";

export default function RequireAuth({ allowedRole}) {
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


    return token ? (
        user === "" ? (
        <Loading></Loading>
        ) :  allowedRole.includes(user.is_admin) ? (
        <Outlet></Outlet>
        )  : (
        <Err403 is_admin={user.is_admin}></Err403>
        )
        ) : (
        <Navigate to={"/login"} replace={true}
        ></Navigate>);
}
