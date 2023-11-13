import React, { useState,useEffect } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import axios from 'axios';
export default function Desrestaurant() {
  
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor />
           </div>
    </div>
  )
}
