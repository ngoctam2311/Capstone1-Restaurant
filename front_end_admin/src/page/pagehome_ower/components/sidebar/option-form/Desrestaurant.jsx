import React from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
export default function Desrestaurant() {
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor
             />
           </div>
    </div>
  )
}
