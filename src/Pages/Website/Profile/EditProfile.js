import { useState } from "react";
import { PROFILE, UPDATE_PROFILE } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";
import NavBar from "../../../Components/NavBar";
import Loading from "../../../Components/Loading";
import Form from 'react-bootstrap/Form';
import Footer from "../Home/Footer";

export default function EditProfile(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [_method] = useState("patch");

    const [loading, setLoading] = useState(false);

    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const form = new FormData();
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        form.append('thumbnail', thumbnail);
        form.append('_method', _method);

        try {
          const res = await Axios.post(`${PROFILE}/${UPDATE_PROFILE}`, form);
          console.log(res);      
          alert("Your Profile has successfully Update");
          window.location.pathname = "/profile";
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
    
      }

    return(
        <>
        {loading && <Loading></Loading>}
        <NavBar></NavBar>
        <div className="container mt-5" style={{marginRight:"40px"}}>
            <Form onSubmit={HandleSubmit} style={{width:"800px"}}>
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

            <label> password </label>
            <input
              className='inputdash'
              name='password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="text" placeholder="Enter your New password ....." />
           
          
            <label> Image </label>
            <input
              className='inputdash'
              onChange={(e) => setThumbnail(e.target.files.item(0))}
              type="file"  />
      
            <button disabled={
                  name.length > 1 
                    ? false : true
                    } className='btnpost' type='submit'> Edit </button>
        </Form>
        </div>
        <Footer></Footer>

        </>
    )
}