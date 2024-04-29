import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from './../../Context/MenuContext';
import { WindowSize } from './../../Context/WindowContext';

export default function SideBar() {
    const menu = useContext(Menu);
    const WindowContext = useContext(WindowSize);
    const windowSize = WindowContext.windowSize;
    // console.log(windowSize);
    const isOpen = menu.isOpen;
    // console.log(isOpen);

    return (
        <>
        <div  style={{
                    position: 'fixed', top: "70px", left: '0', width: '100%', height: "100vh", backgroundColor: "rgba(0,0,0,0.2)",
                    display: windowSize < '768' && isOpen ? 'block' : 'none',                }}>
        </div>
                <div className="side-bar" style={{
                    backgroundColor: "#fff",
                left: windowSize < "768" ? ( isOpen ? 0 : "-100%") : 0,
                width: isOpen ? "240px" : "fit-content",
                position: windowSize < "768" ? "fixed" : "sticky",
                top: windowSize < "768" ? "70px" : 0,
                }}>
                    <NavLink to="/dashboard/posts" className="item-link side-bar-link d-flex align-items-center gap-2 mt-3">
                        <i class="fa-solid fa-brands fa-product-hunt"  style={{ padding: isOpen ? '10px 8px 10px 15px' : "10px 13px" }} ></i>
                        <p className="m-0" style={{
                            display: isOpen ? "block" : "none",
                        }}> Posts </p></NavLink>

                    <NavLink to="/dashboard/posts/create_post" className="item-link side-bar-link d-flex align-items-center gap-2">
                        <i class="fa-solid fa-plus" style={{ padding: isOpen ? '10px 8px 10px 15px' : "10px 13px" }}></i>
                        <p className="m-0" style={{
                            display: isOpen ? "block" : "none",
                        }}>New Post</p> </NavLink>
                </div>

    </>
    );
}