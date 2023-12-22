import React, { useState,useRef } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser'

export default function Desrestaurant() {
  const editor = useRef(null)
 
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor 
             ref={editor} 
             
            />
           </div>
           
    </div>
  )
}