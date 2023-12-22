import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./reservations.css"
import Rowreservation from './Rowreservation'

export default function Reservations() {
   
  const [data , setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData = async () => {
    await axios.get('http://localhost:3000/api/restaurant/pending')
    .then((res) => {
       setData(res.data.data)
       console.log(res.data.data)
    })
  }
  
  // const fetchRespond = async (restaurantId, action) =>{
  //    await axios.patch('http://localhost:3000/api/restaurant/respond',{
  //      restaurantId,
  //      action
  //    })
  //    .then((res)=>{
  //      fetchData()
  //      setData(res.data.data)
  //    })
  // }
 
  const handleSearch = (e)=>{
    e.preventDefault()
  }


  return (
    <div className='wrapper'>
       <div className="header">
            <div className="title-list">
              <h2 className="list-text">DANH SÁCH ĐẶT CHỖ</h2>
            </div>
       </div>
       <div className="maincontent">
           <form className="form">
              <div className="form-col-3">
                 <label className='text-name'>Họ Tên Người Đặt</label>
                 <input type="text"  placeholder='Nhập họ tên người đặt' className='text-input'/>
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Ngày Đặt</label>
                 <input type="date" className='text-input' />
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Trạng Thái</label>
                 <select className='text-input'>
                   <option value="0" >Đã phê duyệt</option>
                   <option value="1">Chờ phê duyệt</option>
                   <option value="2">Xóa</option>
                 </select>
              </div>
              <button className='btn-search' onClick={handleSearch}>Tìm Kiếm</button>
           </form>
       </div>
       <div className="info-customer">
           <table>
              <thead>
                  <tr className='listReservation'>
                       <th className='listcol'>STT</th>
                       <th className='listcol'>Họ và Tên</th>
                       <th className='listcol'>Số Điện Thoại</th>
                       <th className='listcol'>Email</th>
                       <th className='listcol'>Ngày Đặt</th>
                       <th className='listcol'>Thời Gian</th>
                       <th className='listcol'>Số Người</th>
                       <th className='listcol'>Trạng Thái</th>

                  </tr>
              </thead>
              <tbody>
                 {data.map((item,index)=>{
                    <Rowreservation key={item._id} item={item} index={index}
                    //  onRespond={(action)=> fetchRespond(item._id,action)}
                    />
                 })}
              </tbody>
           </table>          
      </div>
    </div>
  )
}
