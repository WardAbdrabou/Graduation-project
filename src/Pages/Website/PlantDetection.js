// import {data} from "../../data";
import CardDiseasesDetection from "../../Components/CardDiseaseDetection";
import { useEffect, useState } from "react";
import { DISEASES } from "../../Api/Api";
import NavBar from "../../Components/NavBar";
import plantLeaf from "../../assests/plant-leaf 1.png";
import vector from "../../assests/Vector.png"
import { Axios } from "../../Api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Home/Footer";
// import axios from "axios";
import Loading from "../../Components/Loading";
import { useParams } from "react-router-dom";


export default function PlantDetection() {
    // const [plantDetection, setplantDetection] = useState([]);
    const params = useParams();

    const [PlantDiseases, setPlantDiseases] = useState([]);
    const [fileup, setfileup] = useState("");
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(2);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const [search, setSearch] = useState("");
    const getPlantsDisease = () => {
        Axios.get(`/${DISEASES}?page=${currentPage}`)
            .then((data) => {
                setPlantDiseases(data.data.data)
            }
            );
    };
    useEffect(() => {
        getPlantsDisease();
        // getAllCategoriesPlants();
    }, [currentPage]);

    //Detect image
    async function HandleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        const form = new FormData();
        form.append('fileup', fileup);
        try {
            const res = await Axios.post(`http://127.0.0.1:5000/api`, form);
            console.log(res.data.soilname);
            const soilname = (res.data.soilname);
            setLoading(false);
            // window.location.pathname = `/diseases/disease/${params.diseaseId}`;
            window.location.pathname = `/diseases/disease/${soilname}`;
        } catch (err) {
            setLoading(false);
            console.log(err);
        }

    }
    return (
        <>
            {loading && <Loading></Loading>}
            <NavBar></NavBar>
            <div>
                <div className="sec2det text-center">
                    <img className="img-diseases" src={plantLeaf}></img>
                    <img className="img-diseases vec" src={vector}></img>
                    <h1 className="main-title-diseases">Identify disease For Free</h1>
                    <p className="main-titlep-diseases">
                        You Can Take a photo or search by Disease  name
                    </p>
                    <div >
                        <br/>
                        <div>
                        <input
                        placeholder="Enter Common Name"
                        className="searchDiseases"
                        onChange={(event) => setSearch(event.target.value)}
                    /> 
                    {/* <div style={{marginLeft:"-550px",marginTop:"-45px" , color:"rgba(208, 197, 197, 1)"}}> */}
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass}  className="iconsearch"/> */}
                    {/* </div> */}
                        </div>
                        <div className="text-center mt-5">
                            <input className="image-upload" onChange={(e) => setfileup(e.target.files.item(0))}
                                type="file" />
                            <button type="submit" className="btn-upload" onClick={HandleSubmit}>predict</button>

                        
                        </div>
                        <br />
                    </div>
                </div>
                <div className="cards" id="cards">
                    <h2 className="main-title"> Diseases Type</h2>
                    <p className="main-titlep text-center">
                        " Plant diseases are a fact of life for farmer.<br></br> Learn how to deal with the most common plant ailments and how to keep them from ruining your crops."
                    </p>
                    <div>
                        <div className="container">
                            {PlantDiseases &&
                                PlantDiseases
                                    .filter((PlantDisease) => {
                                        if (search === "") {
                                            return PlantDisease;
                                        } else if (
                                            PlantDisease.name
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        ) {
                                            return PlantDisease;
                                        }
                                    })
                                    .map((PlantDisease, index) => {
                                        return (
                                            localStorage.setItem("DiseaseId", PlantDisease.id),
                                            <div key={PlantDisease.id}>
                                                <CardDiseasesDetection
                                                    PlantDisease={PlantDisease}
                                                    showButton={true}
                                                />
                                            </div>
                                        );
                                    })}

                        </div>
                        {/* <div className="text-center mt-5">
                            <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faAngleLeft} /></button>
                            <span>{currentPage} - {totalPages}</span>
                            <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>

                        </div> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    );
}
