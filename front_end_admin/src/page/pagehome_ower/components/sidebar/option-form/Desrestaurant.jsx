import React, { useState,useEffect } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import axios from 'axios';
export default function Desrestaurant() {
  const [resDes,setDes] = useState('')

  useEffect(()=>{
    axios.post('http://localhost:5556/api/restaurant/create')
    .then(res => setDes(res.data.data))
    .catch(err => console.log(err))
  },[])
  console.log(resDes)
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor value={resDes} onChange={e=>setDes(e.target.value)}/>
           </div>
    </div>
  )
}
