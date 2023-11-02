import React, { useEffect, useState ,useRef} from 'react'
import "./inforestaurant.css"
import axios from 'axios'

export default function Inforestaurant() {
  const [infoRes,setInfores] = useState({
    resname:"",
    street:"",
    district:"",
    city:""
  })
  const [resAddress,setresAddress] = useState([])
  
  const inputRef = useRef(null)
  const [image,setImage] = useState("")
  // get api
  useEffect(()=>{
    axios.get('http://localhost:5556/api/restaurant/')
    .then(res => setresAddress(res.data.data))
    .catch(err => console.log(err))
  },[])
  // post resname or address
 const url ='http://localhost:5556/api/restaurant/create'
 function submit(e){
  e.prevenDefault();
  axios.post(url,{
      resname: infoRes.resname,
      street: infoRes.street,
      district: infoRes.district,
      city: infoRes.city

  })
  .then(res =>{
      console.log(res.infoRes)
   })
   }
  // img
  const handleImageClick = ()=>{
    inputRef.current.click();
  }
  const handleImageChange = (event)=>{
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0])
  }
  // post
  function handle(e){
    const newdata = {...infoRes}
    newdata[e.target.id] = e.target.value
    setInfores(newdata)
    console.log(newdata)
}
  return (
    <div className='info-restaurant'>
        <span className='title-name'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
          
           <div className="infoItem" onSubmit={(e)=> submit(e)}>
             <label >Tên Nhà Hàng</label>
             <input  type="text" className='text-input'  id='resname'  onChange={(e)=> handle(e)} value={infoRes.resname}/>
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input  type="text" className='text-input' id='street' onChange={(e)=> handle(e)} value={infoRes.street}  />
           </div>

           <div className="infoItem">
            <label >Tỉnh/Thành Phố</label>
              <select className='text-input'  > 
                 <option value={''}>Chọn thành phố</option>
                  {
                    resAddress.map((datacity)=>(
                      <option value={''} key={datacity._id}>{datacity.address.city}</option>
                    
                    ))
                  }
              </select>
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <select  className='text-input' >
               <option value={''}>Chọn Quận huyện</option>
                  {
                    resAddress.map((datacity)=>(
                      <option value={''} key={datacity._id}>{datacity.address.district}</option>
                    
                    ))
                  }
             </select>
           </div>
           <div className="infoItem" onClick={handleImageClick}>
             <label>Ảnh đại diện</label>
             <label type="file" className='file-name'>Tải file
             {/* <img src='./photo.png' alt=''></img> */}
              {image ? (
                <img src='./photo.png' alt='' ></img> 
              ): (
                <img src='./photo.png' alt='' ></img> 
              )
             }
             <input className='file-img' type="file" ref={inputRef}  onChange={handleImageChange}/>
             </label>
              
           </div>
         </form>
    </div>
  )
}
