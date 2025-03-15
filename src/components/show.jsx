import React from 'react';
import { useEffect,useState } from 'react';
export default function show(){
    const [data,setData] = useState([]);
    let url = "http://localhost:3000/getResult";


    useEffect(()=>{
        const apiCalling = async () => {
            try {
                const response = await fetch(url);
                const oneapidata = await response.json();
                console.log(oneapidata);
                setData(oneapidata);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        apiCalling();
    },[])

    return (
        <>
        <h1>Show Page</h1>
        <p>{data}</p>
        </>
    );
}