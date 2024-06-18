import HIRING from "../../assests/hiring.png";
import { useState } from "react";
import { APPLYFORHIRING } from '../../Api/Api';
import { Axios } from '../../Api/axios';
import Loading from '../../Components/Loading';
import NavBar from '../../Components/NavBar';
import Footer from "./Home/Footer";

export default function Hiring(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");
    const [degree, setDegree] = useState("");
    const [graduation_date, setGraduation_date] = useState("");
    const [loading, setLoading] = useState(false);

    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const form = new FormData();
        form.append('name', name);
        form.append('email', email);
        form.append('university', university);
        form.append("major", major);
        form.append('degree', degree);
        form.append('graduation_date', graduation_date);
        try {
          const res = await Axios.post(`${APPLYFORHIRING}`, form);
          console.log(res);      
          setLoading(false);

          window.location.pathname = "/thanksapplying";
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
    
      }


    return(
        <>
        <NavBar></NavBar>
        {loading && <Loading></Loading>}
        <div class="contact" id="Contact">
            <div class="container">
                <div className="col-6 headerContact" >
                    <h2 className="main-title plantDetDes headerCon">Getting a Job</h2>
                    <p className="contact-titlep">If you want to join our team and become one of us , fill out this form</p>
                </div>
                <div class="content">

                    <div class="infoContact">
                        <img src={HIRING} alt="img" style={{width:"500px" , height:"600px" , marginLeft:"-40px" , marginRight:"20px" }}></img>
                    </div>
<form onSubmit={HandleSubmit}>
            <label> Your Name </label>
            <input
              className='inputdash'
              name='name'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              type="text" placeholder="Enter your name....." />
          
            <label> email </label>
            <input
              className='inputdash'
              id='email'
              name='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="Enter your Email....." />

            <label> University </label>
            <input
              className='inputdash'
              name='university'
              value={university}
              required
              onChange={(e) => setUniversity(e.target.value)}
              type="text" placeholder="University ....." />
            <label> Major </label>
            <input
              className='inputdash'
              name='major'
              value={major}
              required
              onChange={(e) => setMajor(e.target.value)}
              type="text" placeholder=" Your Major....." />
            <label> Degree </label>
            <input
              className='inputdash'
              name='degree'
              value={degree}
              required
              onChange={(e) => setDegree(e.target.value)}
              type="text" placeholder="Degree....." />
            <label> Graduation Date </label>
            <input
              className='inputdash'
              name='graduation_date'
              value={graduation_date}
              required
              onChange={(e) => setGraduation_date(e.target.value)}
              type="Date" placeholder="Graduation Date....." />

            <button disabled={
                  name.length > 1 
                    ? false : true
                    } className='btnpost' type='submit'> Submit </button>
        </form>
                    

                </div>

            </div>
        </div>
        <Footer></Footer>

        </>
    )
}