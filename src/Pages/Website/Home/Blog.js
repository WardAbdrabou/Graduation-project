import blogimg from './../../../assests/blog photo1.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
function Blog(props) {
    const  {blog} = props;
    return (
        <>
            <div className="card" style={{ width: '380px', height: '1000px !important', width: '100%' }}>
                <img src={blogimg} style={{ height: '300px' }} />
                <div className="c-contain" style={{ backgroundColor: '#fff' }}>
                    <h4 className='header' style={{ color: '#6f9A61', marginLeft: '15px', marginTop: '10px', fontSize: '19px', disdlay: 'flex', justifyContent: 'center', paddingTop: '5px',alignItems:'center' }}>
                        {/* why you choose the Ankjbh */}{blog.title}
                    </h4>
                    <p className='text' style={{ padding: '5px', borderBottom: '2px solid #ddd', fontSize: '15px'}}>{blog.slug}</p>
                    <div className='growbm' style={{marginTop:'0',display:'flex',justifyContent:'space-between'}}>
                 <Link  to={`/home/${blog.id}`} key={blog.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px',marginLeft:"20px"}}>
                     Read More
                </Link>
                
                <h3 style={{marginRight:'20px',color:"#6F9A61"}}>
                {/* <Route index path='home/:blogId' element={<BlogDetails />} /> */}
                {/* <Route path='GrowingTips/:GrowingTipsId' element={<GrowingTipsDetails/>} /> */}
                <Link to={`home/:blogId`} key={blog.id} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px'}} >
                <EastIcon />
                </Link>
                </h3>

                </div>
                </div>
            </div></>
    );
}

export default Blog;