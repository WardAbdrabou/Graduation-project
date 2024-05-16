import "../../../Css/card.css";
import { Link } from "react-router-dom";

function Blog(props) {
    const  {blog} = props;
    return (
         <>
         <div className="cards">
            <div className="">
            <div className='box'>
                   <img src={blog.image}  alt="img" /> 
                    <div className="content">
                         <h3 className="limitnumberh">
                             {blog.title}
                         </h3>
                         <p className="limitnumber">{blog.slug}</p>
                     </div>
                     { <div className="infoPlant">
                        
                         <Link to={`home/:blogId`}>Read More</Link>  
                         <i className="fas fa-long-arrow-alt-right"></i>
                     </div> }
                 </div> 

            </div>
         

         </div>
        

      
          
            
            </>
    );
}

export default Blog;