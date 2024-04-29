import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../../Context/MenuContext";
import { useContext } from "react";
import { Link} from "react-router-dom";

export default function TopBar(){
    const menu = useContext(Menu)
    const setIsOpen = menu.setIsOpen;
    // console.log(setIsOpen)


    return (
        <div className="top-bar dash-top">
            <div className="top-bar1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-5 p-3 ">
            <h3 >Dashboard</h3>
            <FontAwesomeIcon 
            onClick={() => setIsOpen((prev) => !prev)}
            cursor={"pointer"} icon={faBars} />
            </div>
            <Link to="/" className="btngo">  Website</Link>

        </div>

        </div>
        
    );
}