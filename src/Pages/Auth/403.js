import { Link } from "react-router-dom";
import "./404.css";
export default function Err403(role){
    return (
//         <div className="text-wrapper">
//             <div className="title" data-content={404}>
//                 403-ACCESS DENIED
//             </div>
//             <div className="subtitle">
//                 Oops,You do not have permission to access this page.

//                 <p>You must be Basic , Premium or Enterprise membership level to access this feature.</p>
//                 <Link className="d-block text-center link_404" to={"/"}>
// go to home page
//                     </Link>

//             </div>
//         </div>
<section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">403-ACCESS DENIED</h1>
                </div>
      
                <div class="contant_box_404">
                  <h3 class="h2">
                  Oops,You do not have permission to access this page.
                  </h3>
                  <p>The page you are looking for not avaible! you have finish four free trails</p>
                  <p>You must be Basic , Premium or Enterprise membership level to access this feature.</p>
      <div className="d-block">
      <Link to={"/"} className="link_404 " style={{textDecoration:"none"}}>Go to Home</Link><br></br>
      <Link to={"/membership"} className="link_404 " style={{textDecoration:"none"}}>Go to Pricing Page </Link>
      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}