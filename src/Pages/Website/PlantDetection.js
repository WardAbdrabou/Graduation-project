import React, { useEffect, useState } from "react";
import { DISEASES } from "../../Api/Api";
import NavBar from "../../Components/NavBar";
import plantLeaf from "../../assests/plant-leaf 1.png";
import vector from "../../assests/Vector.png";
import { Axios } from "../../Api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Home/Footer";
import Loading from "../../Components/Loading";
import upload from "../../assests/upload.png";
import CardDiseasesDetection from "../../Components/CardDiseaseDetection";

export default function PlantDetection() {
  const [PlantDiseases, setPlantDiseases] = useState([]);
  const [allPlantDiseases, setAllPlantDiseases] = useState([]);
  const [fileup, setfileup] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(5);
  const [search, setSearch] = useState("");

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getAllPlantDiseases = async () => {
    
    const allDiseases = [];
    for (let page = 1; page <= totalPages; page++) {
      const { data } = await Axios.get(`/${DISEASES}?page=${page}`);
      allDiseases.push(...data.data);
    }
    setAllPlantDiseases(allDiseases);
  };

  const getPlantsDisease = async () => {
    const { data } = await Axios.get(`/${DISEASES}?page=${currentPage}`);
    setPlantDiseases(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAllPlantDiseases();
  }, []);

  useEffect(() => {
    getPlantsDisease();
  }, [currentPage]);

  // Detect image
  async function HandleSubmit() {
    setLoading(true);
    const form = new FormData();
    form.append("fileup", fileup);
    try {
      const res = await Axios.post(`http://127.0.0.1:5000/api`, form);
      console.log(res.data.soilname);
      const diseaseName = res.data.soilname.toLowerCase();
      console.log(diseaseName);
      const matchedDisease = allPlantDiseases.filter(
        (disease) => disease.name.toLowerCase() === diseaseName
      );
      console.log(matchedDisease);
      setPlantDiseases(matchedDisease);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files.item(0);
    setfileup(file);
    HandleSubmit();
  };

  return (
    <>
      {loading && <Loading />}
      <NavBar />
      <div>
        <div className="sec2det text-center">
          <img className="img-diseases" src={plantLeaf} alt="Plant Leaf" />
          <img className="img-diseases vec" src={vector} alt="Vector" />
          <h1 className="main-title-diseases">Identify disease For Free</h1>
          <p className="main-titlep-diseases">
            You Can Take a photo or search by Disease name
          </p>
          <div>
            <br />
            <div>
              <input
                placeholder="Enter Common Name"
                className="searchDiseases"
                onChange={(event) => setSearch(event.target.value)}
              />
              {/* <input
                id="file-upload"
                className="image-upload"
                onChange={handleFileChange}
                type="file"
                style={{ display: "none"}}
              />
              <label
                htmlFor="file-upload"
                style={{ cursor: "pointer", marginLeft: "-65px" }}
              >
                <img src={upload} alt="Upload Icon" />
              </label> */}
            </div>
            <div className="d-flex justify-content-center">
            <div className="text-center mt-5 image-upload">
              <input
                className="mt-2"
                style={{outline:"none", border:"none"}}
                onChange={(e) => setfileup(e.target.files.item(0))}
                type="file"
              />
              <button type="submit" className="btn-upload mb-3" onClick={HandleSubmit}>
                Predict
              </button>
            </div>

            </div>
        
            <br />
          </div>
        </div>
        <div className="cards" id="cards">
          <h2 className="main-title"> Diseases Type</h2>
          <p className="main-titlep text-center">
            " Plant diseases are a fact of life for farmer.<br />
            Learn how to deal with the most common plant ailments and how to
            keep them from ruining your crops."
          </p>
          <div>
            <div className="container">
              {PlantDiseases &&
                PlantDiseases.filter((PlantDisease) => {
                  if (search === "") {
                    return PlantDisease;
                  } else if (
                    PlantDisease.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return PlantDisease;
                  }
                  return false;
                }).map((PlantDisease) => (
                  <div key={PlantDisease.id}>
                    <CardDiseasesDetection
                      PlantDisease={PlantDisease}
                      showButton={true}
                    />
                  </div>
                ))}
            </div>

            <div className="text-center mt-5">
              <button
                className="btn-pagination"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <span>
                {currentPage} - {totalPages}
              </span>
              <button
                className="btn-pagination"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
