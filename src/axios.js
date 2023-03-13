import axios from 'axios'
import { useState,useEffect } from 'react';
const AxiosExample=()=>{
    const[data,setData]=useState("");
    const Api=
    {
        key:"d13a2819528c29f763c036a8d82bfd4c",
        base:"https://api.openweathermap.org/data/2.5/",
    };
    useEffect(()=>{
       axios
       .get(Api.base.key)
        .then((response)=>{
            setData(response.data);
        })
        .catch((err)=>{
            console.error(err)});
        },[]);
     return(
        <div>
            <h5>Axios Example</h5>
            {
                data.map((item)=>{
                    return(<li>{item}</li>)
                })
            }
        </div>
     )
}
export default AxiosExample