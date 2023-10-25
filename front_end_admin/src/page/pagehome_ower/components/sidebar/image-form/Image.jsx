import React from 'react'
import "./image.css"
import UploadIcon from '@mui/icons-material/Upload';
export default function Image() {
  return (
    <div className='image-restaurant'>
        <span className="title-img">HÌNH ẢNH NHÀ HÀNG</span>
        
        <div className="push-image">
           <label type='file' className='file-upimg'>
             <UploadIcon className='upload-img'/>
             <input type="file" className='file-img'/>
           </label>
             
        </div>
        
    </div>
  )
}
