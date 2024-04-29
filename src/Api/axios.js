import axios from "axios";
import { baseURL, baseURL3 } from "./Api";
import Cookie from "cookie-universal";

const cookie =  Cookie();
const token = cookie.get("e-commerce");
// console.log(token);


export const Axios = axios.create({
    baseURL: baseURL ,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        
    },
});