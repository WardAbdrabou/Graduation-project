// import {data} from "../../data";
import CardSuitableP from "../../Components/CardSuitableP";
import { useEffect, useState } from "react";
import { AllSUITABLEPLANTS, CATOGRIES, baseURL } from "../../Api/Api";
import NavBar from "../../Components/NavBar";
import { Axios } from "../../Api/axios";
import Footer from "./Home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function PlantDetalis() {
    const [suitablePlants, setsuitablePlants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(6);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };



    const getPlants = () => {
        Axios.get(`/${AllSUITABLEPLANTS}?page=${currentPage}`)
            .then((data) => {
                setsuitablePlants(data.data.crops.data)
                // console.log(data.data.crops.data)

            });
    }
    //Get Catogries in panigation
    const getAllCategoriesPlants = () => {
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/${CATOGRIES}`)
            .then((data) => setCategories(data.data));
    }

    //Get every Catogies alone
    const getPlantsInCategory = (catName) => {
        console.log(catName);
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/soil/${catName}`)
            .then((data) => setsuitablePlants(data.data));
    }


    useEffect(() => {
        getPlants();
        getAllCategoriesPlants();
    }, [currentPage]);



    return (
        <>
            <NavBar></NavBar>
            <div >
                <div className="cards" id="cards">
                    <h2 className="main-title text-center"> Suitable Plant</h2>
                    <p className="main-titlep limitnumbersuitable text-center"> you Can know what type of your plants suitable for planting in your soil </p>
                    {/* <Search></Search> */}
                    <div>
                        <div className="catogries">
                            {/* <button onClick={() => {
                                getPlants();
                            }} className="btn-catog"> All</button> */}
                            {
                                categories.map((cat) => {
                                    return <button key={cat} onClick={() => {
                                        getPlantsInCategory(cat)
                                    }} className="btn-catog">{cat} Soil</button>
                                })
                            }
                        </div>
                        <br />
                        <div>
                            <input placeholder="Enter your Plant" className="search" onChange={event => setSearch(event.target.value)} type="text"/><br />
                            <div style={{ marginLeft: "320px", marginTop:"-95px",color: "rgba(208, 197, 197, 1)" }}>
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="iconsearch" /> */}
                            </div>
                        </div>
                        <div className="container mt-5">

                            {suitablePlants &&
                                suitablePlants.filter(suitablePlant => {
                                    if (search === '') {
                                        return suitablePlant;
                                    } else if (suitablePlant.name.toLowerCase().includes(search.toLowerCase())) {
                                        return suitablePlant;
                                    }
                                }).map((suitablePlant, index) => {
                                    return (
                                        <div key={suitablePlant.id}>
                                            <CardSuitableP suitablePlant={suitablePlant} showButton={true} />
                                        </div>

                                    );
                                })}

                        </div>
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
            <Footer></Footer>

        </>

    );
}