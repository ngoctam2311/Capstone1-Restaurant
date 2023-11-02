import React from 'react'
import axios from 'axios'
export default function infmomation() {
   axios.get('http://localhost:5556/api/restaurant/')
   .then(res=>{
      console.log('==>res',res)
   })

  return (
    <div>
       
    </div>
  )
}
