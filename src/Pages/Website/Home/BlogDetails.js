import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from './../../Api/axios';

import { baseURL } from "../../Api/Api";

function BlogDetails() {
    // const api_url = "https://fakestoreapi.com/products?limit=5";
    const [blog, setBlog] = useState({});
    const params = useParams();
    // const{id, title ,image,slug,body} = blogId;
  
    // const params = useParams();
    // console.log(params);
    



    useEffect(() => {


    //     // fetch(`${api_url}/${params.blogId}`)
    //     //     .then((res) => res.json())
    //     //     .then((blog) => setBlog(blog));


        
        // Axios.get(`${api_url}/${params.blogId}`)
        // .then((data )=> {
        //       console.log(data);
        //       setBlog(data)})
  
        //   .catch((error) => {
        //       console.log(error);
        //   });


        //  hhhh
        Axios.get(`${baseURL}/blogs/${params.blogId}`)
        .then((data )=> {
            console.log(data.data.blogs);
            setBlog(data.data.blogs)})

        .catch((error) => {
            console.log(error);
        });
    
       
    }, []);



    return (
        <>
        
        {/* BlogDetails - {params.blogId} */}
        <div className="heading">
                <h1>jjj
                  {blog.title}
                
                </h1>
                
            </div>
            {/* {blog.map((blogs)=>{
              return(
                
                <div className="col-4" key={blog.id} style={{marginBottom:'160px'}}>
                    <Blog  blog={blog}/>
                </div>
              )
            })} */}
            
            {/* <div className="about-container">
              <div className="row">
                 <div className="col-md-6">
                   <img src={aboutUs} alt="chosse us"style={{width:'550px'}} />
                 </div>
                 <div className="col-md-6" style={{paddingTop:'8px'}} >
                   <div className="title" style={{display:'flex',justifyContent:'space-between'}}>
                    <h2 style={{ color: '#6f9A61', fontSize: '25px'}}> 
                    
                    </h2>
                    <h5 style={{color:'gray',fontSize: '15px'}}>By Ahmed
                    
                    </h5>
                  </div> 
                  
                  <div className="body">
                    
                  </div>
              
             
              </div>
            </div>
          

            </div> */}
        </>
    )
}

export default BlogDetails;