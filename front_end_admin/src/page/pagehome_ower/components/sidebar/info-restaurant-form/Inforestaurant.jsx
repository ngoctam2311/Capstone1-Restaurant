import React from 'react'
import { useState , useEffect} from 'react'
import "./inforestaurant.css"
import Axios from 'axios'

export default function Inforestaurant() {
  // const url = "http://localhost:5556/api/restaurant/create"
  // const [data , setData] = useState({
  //   name:"",
  //   address:"",
    
  // })
  // function submit(e){
  //   e.preventDefault()
  //   Axios.post(url,{
  //      name:data.name,
  //      address:data.address,
       
  //   })
  //   .then(res=>{
  //     console.log(res.data)
  //   })
  // }
  // function handle(e){
  //   const newdata ={...data}
  //   newdata[e.target.id] = e.target.value
  //   setData(newdata)
  //   console.log(newdata)
  // }
  const [ownerAddress,setOwnerAddress] = useState("")
  const [ownerCity,setOwnerCity] = useState("")
  const [list,setlist] = useState([{'address':'','city':''}])

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(`http://localhost:5556/api/restaurant/?page=1&limit=10&populate=resMenuInfor`)
      const newdata = await response.json();
      setlist(newdata);
      console.log(newdata)
    };
    fetchData();
  },[])
  return (
    <div className='info-restaurant'>
        <span className='title-name'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
           <div className="infoItem">
             <label >Tên Nhà Hàng</label>
             <input  type="text" className='text-input'/>
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input  type="text" className='text-input'/>
           </div>
           <div className="infoItem">
            <label >Tỉnh/Thành Phố</label>
              <select value={ownerCity} onChange={e=> setOwnerCity(e.target.value)} className='text-input' >
                 {/* {newdata.map(city=>(
                  <option value="" key={city._id}>{city.address}</option>
                 ))} */}
              </select>
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <select value={ownerAddress} onChange={e=> setOwnerAddress(e.target.value)} className='text-input' placeholder='chọn quận/huyện'></select>
           </div>
           <div className="infoItem">
             <label>Ảnh đại diện</label>
             <label type="file" className='file-name'>Tải file
             <input type="file" className='file-img'/>
             </label>
              
           </div>
         </form>
    </div>
  )
}
