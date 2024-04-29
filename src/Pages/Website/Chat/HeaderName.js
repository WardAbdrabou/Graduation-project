import { MDBCardBody, MDBCol, MDBTypography ,MDBCard,MDBRow ,MDBContainer} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CONVERSATIONS, baseURL } from "../../../Api/Api";
// import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom';
// import Loading from "../../../Components/Loading";

export default function HeaderName(){
    const [Conversations, setConversations] = useState([]);

    const params = useParams();
  useEffect(() => {
    Axios.get(`${baseURL}/${CONVERSATIONS}`)
      .then((data) => {
        setConversations(data.data.users)
        // console.log(data.data.users)

      });
  }, []);
  
  return(
    <MDBCol md="6" lg="5" xl="4">
      <MDBCardBody>
        <MDBTypography listUnStyled className="mb-0">
          {Conversations.map((Conversation) => {
            return (
              <div key={Conversation.id}>
                <li className="p-2">
                      <div className="d-flex flex-row">
                       
                        <div className="pt-1">
                            { params.convID == Conversation.id ? (
                              <div className="d-flex align-items-center">
                             <img
                             src={Conversation.thumbnail}
                             alt="avatar"
                             className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                             width="60"
                           />
                            <p className="fw-bold mb-0 chat-name">{Conversation.name}</p>
                            </div>
                          
                          ) : ""}
                         
                        </div>
                      </div>
                 
                </li>
              </div>

            );
          })}

        </MDBTypography>
      </MDBCardBody>
    </MDBCol>
  )
}