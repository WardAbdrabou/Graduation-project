import { MDBCol, MDBTypography ,MDBRow ,MDBContainer} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CONVERSATIONS, baseURL } from "../../../Api/Api";
import { Link } from "react-router-dom";
import NavBar from "../../../Components/NavBar";

export default function AllChats() {

  const [Conversations, setConversations] = useState([]);

  useEffect(() => {
    Axios.get(`${baseURL}/${CONVERSATIONS}`)
      .then((data) => {
        setConversations(data.data.users)
        // console.log(data.data.users)

      });
  }, []);

  return (
    <>
    {/* {loading && <Loading></Loading>}    */}
    <NavBar></NavBar>
    <MDBContainer fluid className="mt-2">   
    <MDBRow>

    <MDBCol md="" lg="" xl="">
      <h5 className="fw-bold">ALL CHATS</h5>
      <div>
        <MDBTypography listUnStyled className="mb-0">
          {Conversations.map((Conversation) => {
            return (
              <div key={Conversation.id}  >
                <li
                  className="p-2">
                  <Link to={`${Conversation.id}`} style={{ textDecoration: "none" }}>
                    <a href="conversation" className="d-flex justify-content-between chat-A">
                      <div className="d-flex "style={{backgroundColor:"#eee" , width: "100%" , padding :"10px" , borderRadius:"10px"}}>
                        <img
                          src={Conversation.thumbnail}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0 chat-name">{Conversation.name}</p>
                          <p className="small text-muted">
                            {Conversation.last_message.message}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        {/* <p className="small text-muted mb-1">Just now</p> */}
                        {/* <span className="badge bg-danger float-end">1</span> */}
                      </div>
                    </a>
                  </Link>
                </li>
              </div>

            );
          })}

        </MDBTypography>
      </div>
    </MDBCol>
     
        </MDBRow>
             </MDBContainer>

    </>
  )
}