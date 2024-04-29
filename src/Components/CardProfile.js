// import { useEffect, useState } from "react";
// import avatar from "../assests/avatar.jpg";
// import { Axios } from "../Api/axios";
// import { PROFILE, baseURL } from "../Api/Api";

// //Each Card Contain
// export default function CardProfile(props) {
//     const { profile } = props;
//     const [dataprofile, setProfiles] = useState([]);

// useEffect(() => {
//         Axios.get(`${baseURL}/${PROFILE}/1`)
//             .then((dataprofile) => {setProfiles(dataprofile.data.profile)
            
//             });
//     }, []);
//     return (
//         <>
//         <div class="last-post p-20 bg-white rad-10 p-relative mr-15">
//         <div class="top d-flex align-center ">
//         <img src={avatar} alt="img" class="avatar-post mr-15" />
//         <div class="info">
//                         <span class="d-block mb-2 fw-bold">{dataprofile.name}</span>
//                         <span class="c-grey">About 3 Hours Ago</span>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={profile.thumbnail} alt="img" />
//                     <div className='info'>
//                         <h4 style={{ fontWeight: "bold" }}>{profile.name}</h4>
//                         <p>{profile.email}</p>
//                     </div>
//                 </div>
//                 <div>
//                     <button className="btnfollow">Follow</button>
//                 </div>
//             </div>
//         </>
//     );
// }

