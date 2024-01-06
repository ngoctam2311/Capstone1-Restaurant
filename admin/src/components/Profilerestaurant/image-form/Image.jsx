import React, { useEffect } from 'react'
import "./image.css"
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from 'react';

                       
export default function Image({create,Setcreate}) {
  const [avatar , setavatar] = useState()
  
  useEffect(()=>{
    return ()=>{
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  },[avatar])

  const handleImageChange = (event)=>{
    const file = event.target.files[0]

    file.preview = URL.createObjectURL(file)
    setavatar(file)

    // set Create
   Setcreate({
    ...create,
    image: file.name
   })
    
  }

 
  return (
    <div className='add-image-restaurant'>
        <span className="title-img">HÌNH ẢNH NHÀ HÀNG</span>
        
        <div className="push-image">
           <label type='file' className='file-upimg'>
              
              {avatar ? (
                <img src={avatar.preview} alt='' className='img-display-before'></img> 
              ): (
                <img src='./photo.png' alt=''></img> 
              )
             }
             <UploadIcon className='upload-img'/>
             <input type="file" className='file-img-image' multiple accept='image/*'  onChange={handleImageChange} width="10%"/>
           </label>
          
        </div>
        
    </div>
  )
}