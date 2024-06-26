import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../../Api/axios";
import NavBar from "../../../Components/NavBar";
import Footer from "./Footer";

function BlogDetails(blogId) {
  const [blog, setBlog] = useState({});
  const params = useParams();

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/growing_tips/${params.blogId}`)
      .then((data) => {
        console.log(data.data.tip);
        setBlog(data.data.tip);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar></NavBar>

      <h1
        className="text-center"
        style={{
          color: "#6F9A61",
          fontSize: "45px",
          paddingTop: "30px",
          fontWeight: "bold",
        }}
      >
        Blog Details
      </h1>
      <p
        className="text-center "
        style={{ fontSize: "18px", color: "gray", marginBottom: "60px" }}
      >
        "{blog.slug}"
      </p>
      <div className="about-container">
        <div className="row">
          <div className="col-md-6" style={{ marginBottom: "200px" }}>
            <img
              src={blog.image}
              alt="chosse us"
              style={{
                width: "100%",
                borderRadius: "15px",
                minHeight: "260px",
              }}
            />
          </div>
          <div
            className="col-md-6"
            style={{ paddingTop: "8px", marginBottom: "200px" }}
          >
            <h2
              style={{ color: "#6f9A61", fontSize: "29px", fontWeight: "bold" }}
            >
              {" "}
              {blog.title}{" "}
            </h2>
            <p>
              {blog.slug}
              {blog.body}
            </p>
            {/* <div className="body"style={{fontSize:'17px'}}> {blog.body}  </div> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogDetails;
