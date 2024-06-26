import React, { useEffect, useState } from "react";
import "../Css/post.css";
import { QUESTUION, baseURL } from "../Api/Api";
import { Axios } from "../Api/axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";

//Each Card Contain
export default function CardQuestion(props) {
    const { question } = props;
    const { dataprofile } = props;
    console.log(dataprofile.free_trails)

    // const [dataprofile, setProfiles] = useState([]);
    const [comments, setComments] = useState([]);
    const [addLike, setAddLike] = useState([]);

    const [body, setBody] = useState("");
    const nav = useNavigate();

    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    async function fetchData() {
        try {
            if (dataprofile.membership_level_id === 1 || dataprofile.free_trails === 0) {
                return "/profile";
            } else if (dataprofile.membership_level_id === 1 || 2 || 3 || 4  ){
                Axios.get(`/${QUESTUION}/${question.id}`)
            .then((data) => {
                 setComments(data.data.comments)
                //   console.log(data.data.comments)
                //   console.log(data.data.comments.user)
            })       
            .catch(() => nav("/profile", {replace: true}));

            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    async function HandleAddLike(e) {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await Axios.post(`/questions/${question.id}/likes`)
            console.log(res)
            setAddLike(res)
            setLoading(false);
            window.location.pathname = "/profile";


        } catch (err) {
            setLoading(false);
            // console.log(err);
        }

    }

    async function HandleAddComment(e) {
        setLoading(true);
        e.preventDefault();

        const form = new FormData();
        form.append('body', body);
        try {
            const res = await Axios.post(`${baseURL}/${QUESTUION}/${question.id}`, form)
            console.log(res)            
            console.log(res.data.name)            
            // console.log(res.data.body)            
            window.location.pathname = "/profile";
        } catch (err) {
            nav('/404', { replace: true });

            setLoading(false);
            console.log(err);
        }

    }
    function PricingPage(){
        window.location.pathname = `404`;
    }


    return (
        <>
            {loading && <Loading></Loading>}

            <div class="wrapper gap-20 align-content-center">
                <div class="last-post p-20 bg-white rad-10 p-relative post-card">
                    <div class="top d-flex align-center ">
                        <img class="avatar-post mr-15" src={dataprofile.thumbnail} alt="not found"/>
                        {/* <img src={avatar} alt="img" class="avatar-post mr-15" /> */}

                        <div class="info">
                            <span class="d-block mb-2 fw-bold">{dataprofile.name}</span>
                            {/* <span class="c-grey">About 3 Hours Ago</span> */}
                        </div>
                    </div>
                    <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20 ">
                        {question.body}
                    </div>
                        <div style={{ marginTop: "-45px" }} class="d-flex justify-content-between mt-2 align-items-center">
                            <div style={{marginLeft:"15px"}}>
                            {dataprofile.membership_level_id === 1 && dataprofile.free_trails === 0 ?
                                (<Link style={{ textDecoration: "none", color: "black" }} onClick={PricingPage}>
                                    {question.likes === 0 ? <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }} /> : <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }} />
                                    }
                                    <span >
                                        {question.likes}
                                    </span>
                                </Link>) : (

                                    <Link style={{ textDecoration: "none", color: "black" }} >
                                        {question.likes === 0 ? (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />) : (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />)}

                                        <span >
                                            {question.likes}
                                        </span>
                                    </Link>

                                )}
                            </div>
                            <div>
                            {dataprofile.membership_level_id === 1 && dataprofile.free_trails === 0 ? (<Link style={{ textDecoration: "none", color: "black" }} onClick={PricingPage}>
                                <FontAwesomeIcon icon={faComment} style={{ marginRight: "6px", color: "black", fontSize: "30px", marginTop:"3px"  }} />
                                <span>Comment</span>
                            </Link>) : (<Link style={{ textDecoration: "none", color: "black" }} onClick={() => setModalShow(true)}>
                                <FontAwesomeIcon icon={faComment} style={{ marginRight: "8px", color: "", fontSize: "30px" ,marginBottom:"-6px" }} />
                                <span >Comment</span>
                            </Link>)}
                            </div>
                        </div>
                        
                            <div class=" w-full mt-2 p-2">
                                {comments.map((comment) => {
                                    return (
                                        <>
                                            <div className="d-flex flex-grow-1 flex-shrink-1" key={comment.id} style={{marginLeft:"-5px" , marginTop:'15px'}}>
                                            <img src={comment.user.thumbnail} style={{width:"40px" , height:"40px", borderRadius:"50%", marginRight:"10px"}}></img>

                                                <div style={{backgroundColor:'#eee', padding:"10px" , borderRadius:"10px"}}> 
                                                    <div className="d-flex  align-items-center" >
                                                        {/* <img src={avatar} style={{width:"40px" , height:"40px", borderRadius:"50%", marginRight:"10px"}}></img> */}
                                                        <p className="mb-1 fw-bold">
                                                        {comment.user.name}
                                                            {/* <span className="small">- 2 hours ago</span> */}
                                                        </p>
                                                        <a href="#!">
                                                            {/* <MDBICON fas icon="reply fa-xs" /> */}
                                                            {/* <span className="small" onClick={() => setModalShow(true)}> reply</span> */}
                                                        </a>
                                                    </div>
                                                    <p className="small mb-0">
                                                        {comment.body}
                                                    </p>
                                                </div>
                                            </div>

                                        </>

                                    );
                                })}
                            </div>
                </div>
            </div>
            <div>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <form className=' w-100 mx-2 p-3' onSubmit={HandleAddComment}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter d-flex">
                                <div class="top d-flex align-center ">
                                    <img class="avatar-post mr-15" src={dataprofile.thumbnail} alt="" style={{ width: "80px", height: "80px", borderRadius: "50px" }}/>
                                    {/* <img src={avatar} alt="img" class="avatar-post mr-15" style={{ width: "80px", height: "80px", borderRadius: "50px" }} /> */}
                                    <div class="info">
                                        <span class="d-block fw-bold">{dataprofile.name}</span>
                                    </div>
                                </div>
                            </Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                            <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20 fw-bold fs-4">
                                {question.body}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>

                                <div  class="d-flex justify-content-between mt-2 w-100">
                                    <div style={{marginLeft:"10px"}}>
                                    <Link style={{ textDecoration: "none", color: "black" }} >
                                        {question.likes === 0 ? (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />) : (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />)}
                                        <span>{question.likes}</span>
                                    </Link>
                                    </div>
                                    <div>
                                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => setModalShow(true)}>
                                        <FontAwesomeIcon icon={faComment} style={{ marginRight: "5px", color: "black", fontSize: "30px" }} />
                                        <span>Comment</span>
                                    </Link>
                                    </div>
                                </div>
                                <div class="w-100 mt-1 p-2" >
                                {comments.map((comment) => {
                                    return (
                                        <>
                                            <div className="d-flex flex-grow-1 flex-shrink-1" key={comment.id} style={{marginLeft:"-20px", marginTop:'15px'}}>
                                            <img src={comment.user.thumbnail} style={{width:"40px" , height:"40px", borderRadius:"50%", marginRight:"10px"}}></img>

                                                <div style={{backgroundColor:'#eee', padding:"10px" , borderRadius:"10px"}}>
                                                <div className="d-flex align-items-center" >


                                                    <div className="d-flex align-items-center">
                                                        <p className="mb-1 fw-bold">
                                                        {comment.user.name}
                                                            {/* <span className="small">- 2 hours ago</span> */}
                                                        </p>
                                                        <a href="#!">
                                                            {/* <MDBICON fas icon="reply fa-xs" /> */}
                                                            {/* <span className="small"> reply</span> */}
                                                        </a>
                                                    </div>
                                                    </div>
                                                    <p className="small mb-0" >
                                                        {comment.body}
                                                    </p>
                                                </div>
                                                
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className='d-flex p-2'>
                                <input
                                className="comment"
                                    style={{ width: "550px" }}
                                    name='name'
                                    value={body}
                                    required
                                    onChange={(e) => setBody(e.target.value)}
                                    type="text" placeholder="Add your Comment....." />
                                <button
                                    className="btn-comment"
                                    style={{ marginLeft: "-45px", marginTop: "3px", width: '40px', height: "40px", borderRadius: "50px" }}
                                    disabled={
                                        body.length > 1
                                            ? false : true
                                    } type="submit"><FontAwesomeIcon icon={faPaperPlane} style={{ color: "white", fontSize: "20px", marginLeft: "-4px" }} /></button>
                            </div>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        </>
    );
}
