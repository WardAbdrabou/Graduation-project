import { useEffect, useState } from "react";
import { CAT, DELETEPOST} from "../../Api/Api";
import { Axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

export default function Posts() {
   //States
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(3);
  
  //Get  all Categories
  useEffect(() => {
    Axios.get(`/${CAT}?page=${currentPage}`)
      .then((data) => setPosts(data.data.posts.data))
      .catch((err) => console.log(err));
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${CAT}/${DELETEPOST}/${id}`);
      setPosts((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }  

  const showProducts = posts.map((post, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{post.title}</td>
        <td>{post.slug}</td>
        <td>
            <Link to={`/dashboard/posts/edit/${post.id}`}>
                <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#74afb9", fontSize: "20px", paddingRight: "10px" }}
                ></i>
            </Link>
            <i
                onClick={() => handleDelete(post.id)}
                className="fa-solid fa-trash"
                style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
            ></i>
        </td>
    </tr>

));
  return (
    <>
    <div className="w-100 p-2">
    <div style={{ padding: "20px" }} className="w-100 p-2">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{showProducts}</tbody>
            </table>
        </div>
        </div>
        <div className="" style={{textAlign:"center"}}>
        <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faAnglesLeft} /></button>
        <span>{currentPage} - {totalPages}</span>
        <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
       
      </div>
     
        </>
  );
}