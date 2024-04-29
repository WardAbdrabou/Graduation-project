import { MDBCard, MDBCardBody, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { Axios } from "../../../Api/axios";
import {baseURL } from "../../../Api/Api";
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
import Loading from "../../../Components/Loading";
import NavBar from "../../../Components/NavBar";
import HeaderName from "./HeaderName";

export default function Conversation(){
        const params = useParams();

    const [sendmessages, setSendMessages] = useState("");
    const [showsmessages, setShowMessages] = useState([]);

    // const [messages, setMessages] = useState([]);
    const [receiver_id] = useState(params.convID);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      Axios.get(`/conversations/${params.convID}`)
          .then((data) => {
            setShowMessages(data.data)          
          });
  }, []);
    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const form = new FormData();
        form.append('message', sendmessages);
        form.append('receiver_id', receiver_id);
        try {
          const res = await Axios.post(`${baseURL}/send_message`, form);
          console.log(res.data);
          setLoading(false);
          setSendMessages(res.data.message.message);
          console.log(res.data.message.message);
          window.location.pathname = `/allchats/${params.convID}`;
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
    
      }

    return(
        <>
        {loading && <Loading></Loading>}
        <NavBar></NavBar>
        <HeaderName></HeaderName>
        <MDBCol  className="m-2" style={{backgroundColor:"#eee" }}>
          <MDBTypography listUnStyled className="m-2">
          {showsmessages.map((showmessage) => {
            
              return (
                <>
                { showmessage['sent by authenticated user'] === false ? <>
                <div className="message-chat">  
          <li class=" d-flex flex-row justify-content-start">
            <MDBCard>
              <MDBCardBody>
                <p className="mb-0">
                {showmessage.message}
                </p>
              </MDBCardBody>
            </MDBCard>
  
          </li>
            </div>
                
                </>  : <>
                <div className="message-chat">  
          <li class=" d-flex flex-row justify-content-end">
            <MDBCard >
              <MDBCardBody>
                <p className="mb-0">
                {showmessage.message}
                </p>
              </MDBCardBody>
            </MDBCard>
  
          </li>
            </div>
                
                </> }
                
                </>
                
              
          )})}
          <form className='mx-2 p-3 d-flex justify-content-center align-items-center' onSubmit={HandleSubmit} >
              <div class=" txt-c-mobile w-100">
                <input
                                    name="message"
                                    id="message"
                                    type="text"
                                    placeholder="write your message....."
                                    required
                                    value={sendmessages}
                                    onChange={(e) => setSendMessages(e.target.value)}
                                    ></input>
                </div>
                <button 
                disabled={
                  sendmessages.length > 1 
                    ? false : true
                    } type='submit' className='btnpost mt-0' style={{marginBottom:"11px" , marginLeft:"-125px"}}>send</button>
            </form>
            <li className="mb-3 d-flex" style={{zIndex:"-2"}} >
            </li>        
          </MDBTypography>
        </MDBCol>
        </>
    )
}