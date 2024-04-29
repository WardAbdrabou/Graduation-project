import React from "react";
import { useEffect, useState } from "react";
import './GrowingTips.css';
// import { Grow , baseURL } from './../../Api/Api';
import GrowingTipsList from "./GrowingTipsList";

import { Axios } from "../../../Api/axios";
import NavBar from "../../../Components/NavBar";
// import { useParams } from "react-router-dom";


function GrowingTips() {
  // fake

  // const api_url = "http://127.0.0.1:8000/api/growing_tips";
  const [Growings, setGrowing] = useState([]);
  const [categories, setcategories] = useState([]);
  // const params = useParams();


  const getGrowings = () => {

    Axios.get(`http://127.0.0.1:8000/api/growing_tips`)
      .then((data) => setGrowing(data.data.tips.data));

  }

  const getCategories = () => {
    //   // fetch(`${api_url}/categories`)
    //   //   .then((res) => res.json())
    //   //   .then((data) => setcategories(data));
    // Axios.get(`${api_url}/categories`)
    //   .then(res => setcategories(res.data))


      Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories`)
      .then((data )=> setcategories(data.data.categories));
  }

  
  // const getGrowingIncategorey = (catName) => {

  // const getGrowingIncategorey = (GrowingTipsId) => {
  //   // fetch(`${api_url}/category/${catName}`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => setGrowing(data));

    // Axios.get(`${api_url}/category/${catName}`)
    // .then(res => setGrowing
    //   (res.data))

    const getGrowingIncategorey = (categoryId) => {
    Axios.get(`http://127.0.0.1:8000/api/growing_tips/categories/${categoryId}`)
    .then((data) => setGrowing
      (data.data.category.tips))
  }

  useEffect(() => {
    getGrowings();
    getCategories();
    getGrowingIncategorey();

  }, []);
  return (
    <>
    <NavBar></NavBar>
      <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "55px", paddingTop: '30px' }}>Growing Tips</h2>
      <p className="text-center " style={{ fontSize: "15px" }}>Include Information on soil conditions, watering frequency, and other factors</p>
      <div className="container">
        <div className="menu" style={{ marginLeft: '146px', marginBottom: '50px' }}>
          {
            categories.map((cat) => {
              

                return <button style={{ width: '150px', marginLeft: '15px', color: 'white', borderRadius: '5px' }} key={cat}
                onClick={() => {
                  getGrowingIncategorey(cat)
                }}>{cat}</button>
            })
          }
        </div>

        <div className="row">
          {Growings.map((Growing) => {
            return (
              <div className="col-md-4  " key={Growing.id} style={{ marginTop: '20px' }}>
                <GrowingTipsList Growing={Growing} />
              </div>
            );
          })}

        </div>
      </div>
    </>
  )
}
export default GrowingTips;