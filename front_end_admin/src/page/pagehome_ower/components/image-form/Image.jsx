import React from 'react'
import "./image.css"
import UploadIcon from '@mui/icons-material/Upload';
export default function Image() {
  return (
    <div className='image-restaurant'>
        <span className="title-img">HÌNH ẢNH SÂN BÓNG</span>
        <div className="push-image">
            <UploadIcon className='upload-img'/>
        </div>
    </div>
  )
}
