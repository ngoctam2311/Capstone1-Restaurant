import React from 'react'
import "./inforestaurant.css"

export default function Inforestaurant() {
  return (
    <div className='info-restaurant'>
        <span className='title-name'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
           <div className="infoItem">
             <label >Tên Nhà Hàng</label>
             <input type="text" />
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input type="text" />
           </div>
           <div className="infoItem">
            <label >Địa Chỉ(cụ thể)</label>
             <input type="text" />
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <input type="text" />
           </div>
           <div className="infoItem">
             <label >Ảnh đại diện</label>
              <a>Tải file</a>
           </div>
         </form>
    </div>
  )
}
