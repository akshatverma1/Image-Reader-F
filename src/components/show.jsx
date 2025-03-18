import React from 'react';
import { Upload } from "lucide-react"
import { useEffect,useState } from 'react';
export default function show(){
    const [data,setData] = useState([]);
    let url = "https://image-reader-b-sigma.vercel.app/getResult";


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

      // <div className="flex flex-col min-h-screen">
      // {/* Hero Section */}
      // <section className="bg-white py-12 md:py-24">
      //   <div className="container mx-auto px-4 text-center">
      //     <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Turn your images into insights with AI-powered analysis</h1>
      //     <br></br>
      //     <div style={{margin:"2rem",border:"2px solid rgb(221, 215, 215)" ,padding:"0.5rem", borderRadius:"16px"}}>
      //     <p className="mt-4 text-lg text-muted-foreground mx-auto">
      //      {data}
      //     </p>
      //     </div>
      //   </div>
      // </section>
      // </div>
      <>
      <div className="mt-8 md:mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid gap-6">
            <div className="container mx-auto px-4 text-center">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Turn your images into insights with AI-powered analysis</h1>
           <br></br>
         <div style={{border:"2px solid rgb(210, 208, 208)" ,padding:"0.1rem", borderRadius:"16px"}}>
           
           </div>
         </div>
              {/* <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">Drag and drop your image here, or click to browse</p>
                
              </div> */}
              <p className="error">{data}</p>

           
              
            </div>
       
          </div>
          <br></br></>
    );
}


// import { useState } from 'react';

// const ImageUploader = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Cloudinary config (replace with your values)
//   const cloudName = 'ducospxbj'; // From Step 1
//   const uploadPreset = 'imagerader'; // From Step 2

//   const handleUpload = async (file) => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', uploadPreset);

//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         { method: 'POST', body: formData }
//       );

//       if (!response.ok) throw new Error('Upload failed');
      
//       const data = await response.json();
//       setImageUrl(data.secure_url);
//       setError('');
//     } catch (err) {
//       setError('Failed to upload image');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h1>Image Upload</h1>
      
//       <label className="upload-button">
//         {loading ? 'Uploading...' : 'Choose Image'}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleUpload(e.target.files[0])}
//           disabled={loading}
//         />
//       </label>

//       {error && <p className="error">{error}</p>}

//       {imageUrl && (
//         <div className="preview">
//           <img src={imageUrl} alt="Uploaded" />
//           <a href={imageUrl} target="_blank" rel="noopener noreferrer">
//             Open in New Tab
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploader;