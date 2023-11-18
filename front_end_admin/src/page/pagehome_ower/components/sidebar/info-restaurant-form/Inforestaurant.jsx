import React, { useEffect, useState ,useRef} from 'react'
import "./inforestaurant.css"
import axios from 'axios'

export default function Inforestaurant() {
  const [infoRes,setInfores] = useState(
    {
     resname:"",
     street:"",
     district:"",
     city:"",
   })
  const [resAddress,setresAddress] = useState([])
  
  // get api
  useEffect(()=>{
    axios.get('http://localhost:5556/api/restaurant/')
    .then(res => setresAddress(res.data.data))
    .catch(err => console.log(err))
  },[])

  // img
  const inputRef = useRef(null)
  const [image,setImage] = useState("")

  const handleImageClick = ()=>{
    inputRef.current.click();
  }
  const handleImageChange = (event)=>{
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0])
  }

  // input post
  const handleInput = (e)=>{
 
     setInfores(() =>{
       const data = {...infoRes}
       data[e.target.name] = e.target.value;
       console.log(data)
     })
    }
  
  return (
    <div className='info-restaurant'>
        <span className='title-name'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
           <div className="infoItem" >
             <label >Tên Nhà Hàng</label>
             <input  type="text" className='text-input' name='resname' onChange={handleInput}/>
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input  type="text" className='text-input' name='street' onChange={handleInput}/>
           </div>

           <div className="infoItem">
            <label >Tỉnh/Thành Phố</label >
              <select className='text-input' name='city' onChange={handleInput} > 
                 <option value={''}>Chọn thành phố</option>
                  {
                    resAddress.map((datacity)=>(
                      <option value={datacity.address.city} >{datacity.address.city}</option>
                    
                    ))
                  }
              </select>
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <select  className='text-input' name='district' onChange={handleInput} >
               <option value={''}>Chọn Quận huyện</option>
                  {
                    resAddress.map((datacity)=>(
                      <option value={datacity.address.district} key={datacity._id}>{datacity.address.district}</option>
                      
                    ))
                  }
             </select>
           </div>
           <div className="infoItem">
             <label>Ảnh đại diện</label>
             <label  className='file-name' onClick={handleImageClick}>
              {image ? image.name : "Tải file"}
             <input  className='file-img-info' type="file" ref={inputRef} onChange={handleImageChange}/>
             </label>
              
           </div>
         </form>
    </div>
  )
}
