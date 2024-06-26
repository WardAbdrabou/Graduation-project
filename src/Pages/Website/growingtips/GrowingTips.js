// import React from "react";
// import { useEffect, useState } from "react";
// import './GrowingTips.css';
// import { Link } from "react-router-dom";
// import { Axios } from './../../Api/axios';
// import GrowingTipsDetails from "./GrowingTipsDetails";
// import GrowingTipsList from "./GrowingTipsList";
// import axios from "axios";
// import { baseURL2 } from "../../Api/Api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// function GrowingTips() {

//   const [Growings, setGrowing] = useState([]);
//   const [categories, setcategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages] = useState(3);

//   const handleNextPage = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(prevPage => prevPage - 1);
//   };
    
//   const getGrowings = () => {
    
//     Axios.get(`http://127.0.0.1:8000/api/growing_tips?page=${currentPage}`)
//       .then((data) => setGrowing(data.data.tips.data));
//   }

//   const getCategories = () => {
//       Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories`)
//       .then((data )=> setcategories(data.data.categories));
//   }

//   const getGrowingIncategorey = (catName) => {
//     Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories/${catName}`)
//     .then((data) => setGrowing (data.data.tips))
//   }

//   useEffect(() => {
//     getGrowings();
//     getCategories();
//     getGrowingIncategorey();
//   }, [currentPage]);
//   return (
//     <>
//       <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "50px", paddingTop: '30px',fontWeight:'bold' }}>Growing Tips</h2>
//       <p className="text-center " style={{ fontSize: "18px",color:'gray' }}>"Include Information on soil conditions, watering frequency, and other factors"</p>
//       <div className="container">
//         <div className="menu" style={{ marginLeft: '120px', marginBottom: '50px' }}>
//           {
//             categories.map((cat) => {
//                 return <button  className="btn-catog" key={cat}
//                 onClick={() => {
//                   getGrowingIncategorey(cat)
//                 }}>{cat}</button>
//             })}
//         </div>
//         <div className="row">
//           {Growings.map((Growing) => {
//             return (
//               <div className="col-md-4  " key={Growing.id} style={{ marginTop: '20px' }}>
//                 <GrowingTipsList Growing={Growing} />
//               </div>
//             );
//           })}
//         </div>
//         <div className="" style={{textAlign:"center"}}>
//         <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}>
//           <FontAwesomeIcon icon={faAngleLeft} /></button>
//         <span>{currentPage} - {totalPages}</span>
//         <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
//         <FontAwesomeIcon icon={faAngleRight} />
//         </button>
       
//       </div>
//       </div>
//     </>
//   )}
// export default GrowingTips;


  