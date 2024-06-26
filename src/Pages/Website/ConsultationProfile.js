import React, { useEffect, useState } from 'react';
// import Cookie from 'cookie-universal';
import background from "../../assests/background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { CONSUL, PROFILE } from '../../Api/Api';
import NavBar from '../../Components/NavBar';
import { Axios } from '../../Api/axios';
import Footer from './Home/Footer';
import CardPosts from '../../Components/CardPosts';


export default function ConsultationProfile() {
    const params = useParams();

 
  const [ProfilesInstractor, setProfilesInstractor] = useState([]);
  const [Posts, setPosts] = useState([]);
  const [membership_level_id, setmembership_level_id] = useState("");
  const [free_trails, setfree_trails] = useState("");
  const nav = useNavigate();


  useEffect(() => {
    Axios.get(`/${PROFILE}`)
      .then((dataprofile) => {
        setmembership_level_id(dataprofile.data.user.membership_level_id)
        setfree_trails(dataprofile.data.user.free_trails)
      })            
  }, []);

  useEffect(() => {
    Axios.get(`/${CONSUL}/${params.consID}`)
      .then((data) => {
        console.log(data.data.instructor)
        setProfilesInstractor(data.data.instructor)
        setPosts(data.data.instructor.posts)
        console.log(data.data.instructor.posts)

      })            
        .catch(() => nav('404', { replace: true }));

  }, []);

  function PricingPage(){
    window.location.pathname = `404`;
}
  function Chat(){
    window.location.pathname = `/allchats/${ProfilesInstractor.id}`;
}

  return (
    <>
      <NavBar></NavBar>
      <div >
        <img src={background} alt='background' className='img-profile' />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={ProfilesInstractor.thumbnail} alt="img" className='avatar'/>
            <div className='infoprofile'>
              <h4 style={{ fontWeight: "bold" }}>{ProfilesInstractor.name}</h4>
              <p>{ProfilesInstractor.email}</p>
            </div>
          </div>
          <div >
          { membership_level_id === 1 && free_trails === 0 ?
          ( <Link   className="btn-newpost" onClick={PricingPage}>
          <FontAwesomeIcon icon={faMessage} />
        </Link> 
          )  :( <Link  className="btn-newpost" onClick={Chat}>
              <FontAwesomeIcon icon={faMessage} />
            </Link> )
            
          }
            {/* <Link to={`/allchats/${ProfilesInstractor.id}`} className="btn-newpost">
            <FontAwesomeIcon icon={faMessage} /></Link> */}
            <button className="btnfollow">Follow</button>
          </div>
        </div>
      </div>
      <div class="cards d-flex align-content-center container">
        <div class="container w-full mt-5 ">
          {Posts.map((post) => {
            return (
              <div key={post.id}>
              <CardPosts post={post} />
              </div>

            );
          })}
        </div>
    
    
      </div>
      <Footer></Footer>

    </>
  )
}