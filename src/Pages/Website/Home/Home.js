import React, { useEffect, useState } from "react";
import Header from "./Header";
import chooseus from '../../../assests/Chooseus.png';
import { Link , Navigate } from 'react-router-dom';
import  './Home.css';
import Blog from "./Blog";

import { Axios } from "../../../Api/axios";
import NavBar from "../../../Components/NavBar";
import Footer from "./Footer";
import Cookie from 'cookie-universal';

function Home  ()  {
  
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  
   const[blogs, setBlogs] = useState([]);
   
   async function fetchData() {
    try {
        if (!token) {
            return;
        }
        Axios.get(`/blogs`)
        .then((data) => setBlogs(data.data.blogs))     
        .catch(() => Navigate("/login", {replace: true}));
        
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    fetchData();
}, []);

//    useEffect(() => {
//     Axios.get(`${baseURL}/blogs`)
//         .then((data) => setBlogs(data.data.blogs));
        
// }, []);



  return (
    <>
    <NavBar></NavBar>
      <Header />
      <section className="chosse us">
        <h2 className="text-center plantDetDessec "
          style={{ color: "#6F9A61", fontSize: "55px", paddingTop: '50px' }}>
          Why Choose Us
        </h2>
        <div className="container" >
          <div className="row">
            <div className="col-md-6">
              <img src={chooseus} alt="chosse us"style={{maxWidth:'100%'}} />
            </div>
            <div className="col-md-6"style={{paddingTop:'25px',fontSize:'17px'}} >
              <p>You can know the type of soil and suitable crops for it</p>
              <p> The best condititions for the plant such the amount of water it needs</p>
              <p>The types of chemical fertilizers,The suitable one and the amount of usage the soil needs</p>
              <p> The ideal timing for planting each type pf plant and to take into account local climate conditions</p>
              <p>You can know the type of soil and suitable crops for it</p>
              <p>  Pests and diseases that can hurt he plant and how to deel with it</p>
              <p style={{fontSize:'22px'}}>you can learn more by trying our services:</p>
              <button style={{borderRadius:'15px'}}><Link to="/service">Service</Link></button>
              
             
          </div>
          </div>
        </div>

      </section>
      <section className="ourBlog" >
         <h2 className="head plantDetDessec" style={{color:'#6F9A61', fontSize:'50px',paddingTop:'30px',display:'flex',justifyContent:'center'}}>Our Blogs</h2>

         <div className="blog-container" style={{marginTop:'65px',width:'75%',display:'flex',marginLeft:'184px'}}>
          <div className="row">
            {blogs.map((blog)=>{
              return(
                <div className="col-4" key={blog.id} >
                    <Blog  blog={blog}/>
                </div>
              )
            })}
           
            
            
          </div>
         </div>
          
            
        
      </section>
      <Footer></Footer>
    </>
  );
}
export default Home;





/* <div className="content" style={{paddingTop:'80px'}}>
          <div className="row"> */
    //       <div className="col-4"  style={{paddingLeft:'200px'}}>
    //       <div className="blog" >
    //         <img src={SoilDetect}/>
    //         <div className="blogBody">
    //           <p className="head1"  style={{color:'#6F9A61',display:'flex',justifyContent:'center'}}>Hello to our work</p>
    //           <p className="blgText" style={{color:'black',padding:'6px'}}>
    //             hgu hiyhki iijghg mjhghnmk mnnbhuj nbvghmlkn nmvkhufthb vfgyurfghb bhjgub vggrfgh
    //           </p>
    //           <Link to="/home" style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '20px',top:'50px' }}>Read More</Link>
    //         {/* </div>
    //       </div> */}
    //     </div>
    //   </div>
       

    //  </div>