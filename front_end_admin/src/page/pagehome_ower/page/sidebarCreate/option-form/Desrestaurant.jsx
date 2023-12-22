import React, { useState,useRef } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser'

export default function Desrestaurant({create,Setcreate}) {
  const editor = useRef(null)
 
  const handleDescriptionChange = (content) => {
    Setcreate({
      ...create,
      description: content
    });
  };
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             {/* <JoditEditor 
             ref={editor} 
             value={create.description}
             onChange={handleDescriptionChange}
            /> */}
           </div>
           
    </div>
  )
}