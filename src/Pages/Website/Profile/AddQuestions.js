import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { Axios } from '../../../Api/axios';
import { CREATEQUESTION, PROFILE, QUESTUION, baseURL } from '../../../Api/Api';
import Loading from '../../../Components/Loading';
import { useNavigate } from 'react-router-dom';

export default function AddQuestions(props) {
  const [body, setBody] = useState("");
  const [dataprofile, setProfiles] = useState([]);
  

  const [loading, setLoading] = useState(false);
  const nav = useNavigate();


  useEffect(() => {
    Axios.get(`${baseURL}/${PROFILE}`)
      .then((dataprofile) => {
        setProfiles(dataprofile.data.user)
      });
  }, []);

  //function
  async function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    const form = new FormData();
    form.append('body', body);
    try {
      const res = await Axios.post(`${baseURL}/${QUESTUION}/${CREATEQUESTION}`, form)
      console.log(res);
      window.location.pathname = "/profile";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }

  }

  return (
<>
    {loading && <Loading></Loading>}

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >      <form className=' w-100 mx-2 p-3' onSubmit={HandleSubmit}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter d-flex">
            <div class="top d-flex align-center ">
            <img class="avatar-post mr-15" src={dataprofile.thumbnail} alt="" style={{width:"90px", height:"90px", borderRadius:"50px"}}/>
            <div class="info">
              <span class="d-block mb-2 fw-bold">{dataprofile.name}</span>
              {/* <span class="c-grey">About 3 Hours Ago</span> */}
            </div>
          
          </div>
            </Modal.Title>

      </Modal.Header>
      <Modal.Body>
              <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
                <input
                                    className="mb-2 input-post"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="what is in your mind?....."
                                    required
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    ></input>
                </div>

      </Modal.Body>
      <Modal.Footer>
      <button 
                disabled={
                  body.length > 1 
                    ? false : true
                    } type='submit' className='btnpost'>Create Post</button>
      </Modal.Footer>
      </form>

    </Modal>
    </>
  );
}
