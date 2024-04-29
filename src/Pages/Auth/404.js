import { Link } from "react-router-dom";
import './404.css'

// import {}
export default function Err404({role}){
    return(
        <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>
      
                <div class="contant_box_404">
                  <h3 class="h2">
                    Look like you're lost
                  </h3>
      
                  <p>the page you are looking for not avaible!</p>
                  <p>the page you are looking for not avaible!</p>
      <div className="d-block">
      <Link to={"/"} className="link_404 ">Go to Home</Link>
                  <Link to={"/membership"} className="link_404 ">Go to Pricing Page </Link>
      </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}