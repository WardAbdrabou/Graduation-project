// import {data} from "../../data";
// import CardSuitableP from "../../Components/CardSuitableP";
import { useEffect, useState } from "react";
import {baseURL} from "../../Api/Api";
import NavBar from "../../Components/NavBar";
import CardGrowingTips from "../../Components/CardGrowingTips";
import { Axios } from "../../Api/axios";
import Footer from "./Home/Footer";


export default function GrowingTips() {
    const [ GrowingTips, setGrowingTips] = useState([]);
    const [categories, setCategories] = useState([]);


    const getTips = () => {
        Axios.get(`${baseURL}/growing_tips`)
            .then((data) => {
                setGrowingTips(data.data.tips.data)
                // console.log(data.data.tips.data)
            
            });
    }

    // console.log(data.data.tips.data[0].category.name));

    //Get Catogries in panigation
    const getAllCategoriesPlants = () => {
        Axios.get(`${baseURL}/growing_tips/categories`)
            .then((data) => {
                setCategories(data.data.categories)
                // console.log(data.data)
            });
    }

    // Get every Catogies alone
    const getPlantsInCategory = (catName) => {
        console.log(catName);
        Axios.get(`${baseURL}/growing_tips/categories/${catName}`)
            .then((data) => setGrowingTips(data.data.tips));
    }

    


    useEffect(() => {
        getTips();
        getAllCategoriesPlants();
    }, []);

    return (
        <>
        <NavBar></NavBar>
            <div>
                <div className="cards" id="cards">
                    <h2 className="main-title"> Growing Tips</h2>
                    <p className="main-titlep limitnumbersuitable">Provide shade or protection for plants that are sensitive to intense Sunlight</p>
                    <div>
                        <div className="catogries">
                            {
                                categories.map((cat) => {
                                    return <button key={cat} onClick={() => {
                                        getPlantsInCategory(cat)
                                    }} className="btn-catog">{cat}</button>
                                })
                            }
                        </div>
    
                        <div className="container">
                            
                            {GrowingTips.map((growingtip, index) => {
                                    return (
                                        <div key={growingtip.id}>
                                            <CardGrowingTips growingtip={growingtip} showButton={true} />
                                        </div>

                                    );
                                })}

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>

    );
}