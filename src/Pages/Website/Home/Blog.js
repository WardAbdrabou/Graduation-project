// import blogimg from './../../assets/blog.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import './Home.css';
function Blog(props) {
    const { blog } = props;
    return (
        <>

            <div className="box" >
                <img className='blogImg' src={blog.image} />
                <div className="contentbox">
                   <h4 className='limitnumberh'>
                   {blog.title}
                   </h4>
                   <p className="limitnumber">{blog.slug}</p>
                   </div>
                    <div className='infoPlant'>
                        <Link to={`/home/${blog.id}`} key={blog.id} >
                            Read More
                        </Link>
                                <EastIcon className="icon"/>
                           
                    </div>
                </div>
               
        
            </>
    );
}

export default Blog;









