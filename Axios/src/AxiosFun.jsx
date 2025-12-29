import axios from "./Axios";
import { useEffect, useState } from "react";

function AxiosFun() {
    const [products,setProduct]=useState([]);
    const [error,setError]=useState("");
useEffect(() => {

    axios.get("/posts")
    .then((response) =>setProduct(response.data.products))
    .catch((error)=>setError(error.message))
}, []);
}
export default AxiosFun;
