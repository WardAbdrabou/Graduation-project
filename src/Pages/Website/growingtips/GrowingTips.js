// import React from "react";
// import { useEffect, useState } from "react";
// import './GrowingTips.css';

// // ward
// import { Axios } from './../../../Api/axios';

// // import { Grow , baseURL } from './../../Api/Api';
// import GrowingTipsList from "./GrowingTipsList";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// // import { useParams } from "react-router-dom";


// function GrowingTips() {
//   // fake
// //   const api_url = "https://fakestoreapi.com/products";

//   // const api_url = "http://127.0.0.1:8000/api/growing_tips";
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
    
//   // const params = useParams();


//   const getGrowings = () => {
//     // fetch(api_url)
//     //   .then((res) => res.json())
//     //   .then((data) => setGrowing(data));
//     // second
//     // axios.get(api_url)
//     //   .then(res => setGrowing(res.data))
//     // third**********
//     // fake
//     // Axios.get(`https://fakestoreapi.com/products`)
//     //   .then((data) => setGrowing(data.data));
    

//     Axios.get(`http://127.0.0.1:8000/api/growing_tips?page=${currentPage}`)
//     // {params:{
//     //   page:1,
      

//     // }})
//       .then((data) => setGrowing(data.data.tips.data));

//   }

//   const getCategories = () => {
//     //   // fetch(`${api_url}/categories`)
//     //   //   .then((res) => res.json())
//     //   //   .then((data) => setcategories(data));
//     // Axios.get(`${api_url}/categories`)
//     //   .then(res => setcategories(res.data))


//       Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories`)
//       .then((data )=> setcategories(data.data.categories));
//   }

  
//   // const getGrowingIncategorey = (catName) => {

//   // const getGrowingIncategorey = (GrowingTipsId) => {
//   //   // fetch(`${api_url}/category/${catName}`)
//   //   //   .then((res) => res.json())
//   //   //   .then((data) => setGrowing(data));

//     // Axios.get(`${api_url}/category/${catName}`)
//     // .then(res => setGrowing
//     //   (res.data))

//     const getGrowingIncategorey = (catName) => {
//     Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories/${catName}`)
//     .then((data) => setGrowing
//       (data.data.tips))
//   }

//   useEffect(() => {
//     getGrowings();
//     getCategories();
//     getGrowingIncategorey();

//   }, [currentPage]);
//   return (
//     <>
//       <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "55px", paddingTop: '30px' }}>Growing Tips</h2>
//       <p className="text-center " style={{ fontSize: "18px" }}>Include Information on soil conditions, watering frequency, and other factors</p>
//       <div className="container">
//         <div className="menu" style={{ marginLeft: '120px', marginBottom: '50px' }}>
//         {/* <button style={{color: 'white', borderRadius: '5px',fontSize:'18px' }}  className="btn-catog"
//          onClick={() => {  getCategories(); }} > All</button> */}
//           {
//             categories.map((cat) => {
              

//                 return <button  className="btn-catog" key={cat}
//                 onClick={() => {
//                   getGrowingIncategorey(cat)
//                 }}>{cat}</button>
//             })
//           }
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
//         <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faAngleLeft} /></button>
//         <span>{currentPage} - {totalPages}</span>
//         <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
//         <FontAwesomeIcon icon={faAngleRight} />
//         </button>
       
//       </div>
//       </div>
//     </>
//   )
// }
// export default GrowingTips;

// // style={{ width: '140px',fontSize:'18px', marginLeft: '10px', color: 'white', borderRadius: '5px' }}