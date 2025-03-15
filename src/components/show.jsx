// import React from 'react';
// import { useEffect,useState } from 'react';
// export default function show(){
//     const [data,setData] = useState([]);
//     let url = "http://localhost:3000/getResult";


//     useEffect(()=>{
//         const apiCalling = async () => {
//             try {
//                 const response = await fetch(url);
//                 const oneapidata = await response.json();
//                 console.log(oneapidata);
//                 setData(oneapidata);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         apiCalling();
//     },[])

//     return (
//         <>
//         <h1>Show Page</h1>
//         <p>{data}</p>
//         </>
//     );
// }


import { useState } from 'react';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Cloudinary config (replace with your values)
  const cloudName = 'ducospxbj'; // From Step 1
  const uploadPreset = 'imagerader'; // From Step 2

  const handleUpload = async (file) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: formData }
      );

      if (!response.ok) throw new Error('Upload failed');
      
      const data = await response.json();
      setImageUrl(data.secure_url);
      setError('');
    } catch (err) {
      setError('Failed to upload image');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1>Image Upload</h1>
      
      <label className="upload-button">
        {loading ? 'Uploading...' : 'Choose Image'}
        <input
          type="file"
          
          accept="image/*"
          onChange={(e) => handleUpload(e.target.files[0])}
          disabled={loading}
        />
      </label>

      {error && <p className="error">{error}</p>}

      {imageUrl && (
        <div className="preview">
          <img src={imageUrl} alt="Uploaded" />
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            Open in New Tab
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;