import React, { useEffect, useState } from 'react';
// import Cookie from 'cookie-universal';
import background from "../../assests/background.png";
import avatar from "../../assests/avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { CONSUL } from '../../Api/Api';
import NavBar from '../../Components/NavBar';
import AddQuestions from './Profile/AddQuestions';
import CardQuestion from '../../Components/CardQuestion';
import { Axios } from '../../Api/axios';
import Footer from './Home/Footer';


export default function ConsultationProfile() {
    const params = useParams();

 
  const [dataprofile, setdataprofile] = useState([]);
  const [Profiles, setProfiles] = useState([]);
  const [Questions, setQuestions] = useState([]);
  const nav = useNavigate();

  // const [free_trails, setfree_trails] = useState([]);

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    Axios.get(`/${CONSUL}/${params.consID}`)
      .then((dataprofile) => {

        setdataprofile(dataprofile.data.instructor)
        setProfiles(dataprofile.data.instructor)
        setQuestions(dataprofile.data.instructor.posts)

      })            
        .catch(() => nav('/dashboard/categories/page/404', { replace: true }));

  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div >
        <img src={background} alt='background' className='img-profile' />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={Profiles.thumbnail} alt="img" className='avatar'/>
            <div className='infoprofile'>
              <h4 style={{ fontWeight: "bold" }}>{Profiles.name}</h4>
              <p>{Profiles.email}</p>
            </div>
          </div>
          <div >

            <Link to="/editprofile" className="btn-newpost">
            <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
            <Link to={`/allchats/${dataprofile.id}`} className="btn-newpost">
            <FontAwesomeIcon icon={faMessage} /></Link>
            {/* <Link  className="btn-newpost" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </Link> */}
            <button className="btnfollow">Follow</button>
          </div>
        </div>
      </div>
      <div class="page d-flex align-content-center container">
        <div class="content w-full mt-5 ">
          {Questions.map((question) => {
            return (
              <div key={question.id}>
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