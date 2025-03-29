import React from 'react';
import { Upload } from "lucide-react"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button"
export default function show() {
  const [data, setData] = useState([]);
  let url = "https://image-reader-b-sdg3.vercel.app/getResult";


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

  useEffect(()=>{
    apiCalling();
  },[])


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

          <Button asChild className="hidden md:inline-flex">
            <Link to="/">Re-Generated</Link>
          </Button>

        </div>
        
      </div>
      <br></br></>
  );
}

