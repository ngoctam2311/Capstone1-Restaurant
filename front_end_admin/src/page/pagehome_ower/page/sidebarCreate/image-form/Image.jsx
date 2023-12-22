import React from 'react'
import "./image.css"
import UploadIcon from '@mui/icons-material/Upload';
import { useRef , useState } from 'react';

export default function Image({create,Setcreate}) {
  const inputRef = useRef(null)


  const handleImageClick = ()=>{
    inputRef.current.click();
  }
  const handleImageChange = (event)=>{
    const file = event.target.files[0]
    if (file) {
      Setcreate({
        ...create,
        image: file
      });
    }
  }
  return (
    <div className='add-image-restaurant'>
        <span className="title-img">HÌNH ẢNH NHÀ HÀNG</span>
        
        <div className="push-image" onClick={handleImageClick}>
           <label type='file' className='file-upimg'>
             <img src='./photo.png' alt=''></img> 
              {create.image ? (
                <img src={URL.createObjectURL(create.image)} alt='' className='img-display-before'></img> 
              ): (
                <img src='./photo.png' alt=''></img> 
              )
             }
             <UploadIcon className='upload-img'/>
             <input type="file" className='file-img-image' ref={inputRef}  onChange={handleImageChange}/>
           </label>
             
        </div>
        
    </div>
  )
}