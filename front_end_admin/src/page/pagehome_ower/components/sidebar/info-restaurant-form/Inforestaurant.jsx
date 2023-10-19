import React from 'react'
import "./inforestaurant.css"
export default function Inforestaurant() {
  return (
    <div className='info-restaurant'>
        <span className='title-name'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
           <div className="infoItem">
             <label >Tên Nhà Hàng</label>
             <input type="text" className='text-input'/>
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input type="text" className='text-input'/>
           </div>
           <div className="infoItem">
            <label >Tỉnh/Thành Phố</label>
              <select className='text-input'></select>
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <select className='text-input' placeholder='chọn quận/huyện'></select>
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
