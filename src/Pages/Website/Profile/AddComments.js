// import Modal from 'react-bootstrap/Modal';
// import avatar from "../../../assests/avatar.jpg"
// import { useEffect, useState } from 'react';
// import { Axios } from '../../../Api/axios';
// import {  PROFILE, QUESTUION, baseURL } from '../../../Api/Api';
// import Loading from '../../../Components/Loading';

// export default function AddComments(props) {
//   // const { question } = props;


//   // const questionId =  localStorage.getItem('questionId');
//   // console.log(questionId);

//   const [dataprofile, setProfiles] = useState([]);

//   const [body, setBody] = useState("");

//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     Axios.get(`${baseURL}/${PROFILE}`)
//       .then((dataprofile) => {
//         setProfiles(dataprofile.data.user)
//       });
//   }, []);

  
// //   useEffect(() => {
// //     const res = Axios.get(`${baseURL}/question/${questionId}`)
// //         .then((data) => {
// //             console.log(data.data.question.id)
// //             // console.log(data.data.question.body)
// //             // const questionBody = data.data.question.body;
// //             // localStorage.setItem('questionBody', questionBody);
// //             // setComments(data.data.question.comments)

// //         }
// //         );
// // }, []);

// // async function HandleSubmit(e) {
// //   setLoading(true);
// //   e.preventDefault();

// //   const form = new FormData();
// //   form.append('body', body);
// //   try {
// //     const res = await Axios.post(`${baseURL}/${QUESTUION}/${questionId}`, form);
// //     console.log(res);
// //     window.location.pathname = "/profile";
// //   } catch (err) {
// //     setLoading(false);
// //     console.log(err);
// //   }

// // }

//   return (
// <>
//     {loading && <Loading></Loading>}

//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >      
//     <form className=' w-100 mx-2 p-3' onSubmit={HandleSubmit}>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter d-flex">
//             <div class="top d-flex align-center ">
//             {/* <img class="avatar mr-15" src={post.image} alt="" /> */}
//             <img src={avatar} alt="img" class="avatar-post mr-15" style={{width:"90px", height:"90px", borderRadius:"50px"}}/>
//             <div class="info">
//               <span class="d-block mb-2 fw-bold">{dataprofile.name}</span>
//               <span class="c-grey">About 3 Hours Ago</span>
//             </div>
//           </div>
//             </Modal.Title>

//       </Modal.Header>
//       <Modal.Body>
//               <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
                
//                 </div>
//                 <div className='d-flex p-2'>
//                 <input
//                 style={{marginRight:"-105px"}}
//                     name='name'
//                     value={body}
//                     required
//                     onChange={(e) => setBody(e.target.value)}
//                     type="text" placeholder="name....." />
//                 <button  
//                 style={{marginLeft:"-20px" , marginTop:"3px"}}
//                 disabled={
//                   body.length > 1 
//                     ? false : true
//                     } className='btnpost'>addcomment</button>
//                 </div>
               

//       </Modal.Body>
//       <Modal.Footer>
//       <button 
//                 disabled={
//                   body.length > 1 
//                     ? false : true
//                     } type='submit' className='btnpost'>Create Post</button>
//       </Modal.Footer>
//       </form>

//     </Modal>
//     </>
//   );
// }
