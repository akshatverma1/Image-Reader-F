import React from 'react';
import { Upload } from "lucide-react"
import { useEffect, useState } from 'react';
export default function show() {
  const [data, setData] = useState([]);
  let url = "http://localhost:3000/getResult";

  for (let i = 1; i < 3; i++) {
    useEffect(() => {
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
    },[data]);
    setTimeout(() => {
      // console.log(ress);
    }, 8000)

  }


  return (


    <>
      <div className="mt-8 md:mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="grid gap-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Turn your images into insights with AI-powered analysis</h1>
            <br></br>
            <div style={{ border: "2px solid rgb(210, 208, 208)", padding: "0.1rem", borderRadius: "16px" }}>

            </div>
          </div>

          <p >{data}</p>



        </div>

      </div>
      <br></br></>
  );
}

