import NavBar from '../../../Components/NavBar';
import React, { useEffect, useState } from 'react';
import { Axios } from '../../../Api/axios';
import {  PROFILE, baseURL } from '../../../Api/Api';
import avatar from "../../../assests/avatar.jpg";
import background from "../../../assests/background.png";
import CardQuestion from '../../../Components/CardQuestion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import AddQuestions from './AddQuestions';
import Footer from '../Home/Footer';


export default function Profile() {
 
  const [dataprofile, setProfiles] = useState([]);
  const [Questions, setQuestions] = useState([]);
  const [membership_level_id, setmembership_level_id] = useState("");
  const [free_trails, setfree_trails] = useState("");


  // const nav = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    Axios.get(`${baseURL}/${PROFILE}`)
      .then((dataprofile) => {
        setProfiles(dataprofile.data.user)
        setmembership_level_id(dataprofile.data.user.membership_level_id)
        setfree_trails(dataprofile.data.user.free_trails)
        setQuestions(dataprofile.data.user.questions)
        // console.log(dataprofile.data.user.questions)
        // console.log(dataprofile.data.user)

      })            
  }, []);

//   useEffect(() => {
//     const res = Axios.get(`${baseURL}/question`)
//         .then((data) => {
//              console.log(data.data)
//             // const questionId = data.data.question.id;
//             // localStorage.setItem('questionId', questionId);
//             // setComments(data.data.question.comments)

//         }
//         );
// }, []);
  

  return (
    <>
      <NavBar></NavBar>
      <div >
        <img src={background} alt='background' className='img-profile' />
        <div className="profile-content d-flex align-items-center justify-content-between">
          <div>
            <img src={dataprofile.thumbnail} alt="img" className='avatar'/>
            <div className='infoprofile'>
              <h4 style={{ fontWeight: "bold" }}>{dataprofile.name}</h4>
              <p>{dataprofile.email}</p>
            </div>
          </div>
          <div >
            <Link to="/editprofile" className="btn-newpost">
            <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
            <Link to={`/allchats/${dataprofile.id}`} className="btn-newpost">
            <FontAwesomeIcon icon={faMessage} /></Link>
          { membership_level_id === 1 && free_trails === 0 ?
          ( <Link  className="btn-newpost" onClick={() => (alert("You must be Basic , Premium or Enterprise membership level to access this feature."))}>
          <FontAwesomeIcon icon={faPlus} />
        </Link> 
          )  :( <Link  className="btn-newpost" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </Link> )
            
          }

            <button className="btnfollow">Follow</button>
          </div>
        </div>
      </div>
      <div class="d-flex align-content-center container">
        <div class="content w-full mt-5">
          {Questions.map((question) => {
            return (
              <div key={question.id} >
                <CardQuestion question={question} dataprofile={dataprofile}/>
              </div>
            );
          })}
         
        </div>
      <AddQuestions
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
      <Footer></Footer>

    </>
  )
}