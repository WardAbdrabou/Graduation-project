// import { useEffect, useState } from "react";
// import "../Css/post.css";
// import avatar from "../assests/avatar.jpg";
// import { PROFILE, baseURL } from "../Api/Api";
// import { Axios } from "../Api/axios";
// import Cookie from 'cookie-universal';
// import { Link, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComment } from "@fortawesome/free-solid-svg-icons";


// //Each Card Contain
// export default function CardComments(props) {
//     const { question } = props;

//     const params = useParams();


//     const cookie = Cookie();
//     const token = cookie.get("e-commerce");
//     console.log(token);
    
//     const [dataprofile, setProfiles] = useState([]);

//     useEffect(() => {
//         Axios.get(`${baseURL}/${PROFILE}`)
//             .then((dataprofile) => {
//                 setProfiles(dataprofile.data.user)            
//                 console.log(dataprofile.data.user.questions)            
//             });
//     }, []);
    
//     useEffect(() => {
//         Axios.get(`${baseURL}/question/${params.questionId}`)
//         .then((data) => console.log(data.data)
//         );
//       }, []);

//     return (
//         <>
//            <div class="wrapper d-grid gap-20 align-content-center">
//            <div class="last-post p-20 bg-white rad-10 p-relative mr-15">
//                 <div class="top d-flex align-center ">
//                     {/* <img class="avatar mr-15" src={post.image} alt="" /> */}
//                     <img src={avatar} alt="img" class="avatar-post mr-15" />

//                     <div class="info">
//                         <span class="d-block mb-2 fw-bold">{dataprofile.name}</span>
//                         <span class="c-grey">About 3 Hours Ago</span>
//                     </div>
//                 </div>
//                 <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
//                     {question.body}
//                 </div>
//                 <div class="post-stats between-flex c-grey">
//                     <div>
//                         <i class="fa-regular fa-heart"></i>
//                         <span>1.8K</span>
//                     </div>
//                     <div>

//                 <Link to={`/question/${question.id}`} style={{textDecoration:"none" , color:"black"}}>
//                 <FontAwesomeIcon icon={faComment} style={{marginRight:"5px"}} />
//                     <span>Comment</span>
//                 </Link>
//                     </div>
//                 </div>
//                 </div>
//                 </div>

//         </>

//     );
// }
