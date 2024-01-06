import React from 'react'
import { useState } from 'react';
import "./inforestaurant.css"


export default function Inforestaurant({create,Setcreate,handleInputChange, errors}) {
  let dis= ["Liên Chiểu", "Thanh Khê","Hải Châu","Sơn Trà","Ngũ Hành Sơn","Hòa Vang"]
  let city = ['Đà Nẵng']

   // error checking for fields
   
  
     
  return (
    <div className='info-restaurant'>
        <span className='title-name-info'>THÔNG TIN NHA HÀNG</span>
         <form className="infoForm">
           <div className="infoItem" >
             <label >Tên Nhà Hàng</label>
             <input  type="text" className='text-input' id="resname" name='resname' onChange={handleInputChange} value={create.resname}/>
            
           </div>
           <div className="infoItem">
             <label >Địa Chỉ(cụ thể)</label>
             <input  type="text" className='text-input' id='street' name='address.street'  onChange={ handleInputChange} value={create.address.street}/>
             
           </div>

           <div className="infoItem">
            <label >Tỉnh/Thành Phố</label>
              <select className='text-input' name='address.city' id='city' onChange={ handleInputChange} value={create.address.city}  > 
                 <option value={''}>Chọn thành phố</option>
                  {
                    city.map((datacity)=>(
                      <option value={datacity} >{datacity}</option>
                    
                    ))
                  }
              </select>
              
           </div>
           <div className="infoItem">
             <label >Quận/huyện</label>
             <select  className='text-input' name='address.district' id='district' onChange={ handleInputChange} value={create.address.district}>
               <option value={''}>Chọn Quận huyện</option>
                  {
                    dis.map((datacity,index)=>(
                      <option  value={datacity}>{datacity}</option>
                    ))
                  }
             </select>
             
           </div>
           <div className="infoItem">
             {/* <label>Ảnh đại diện</label>
             <label  className='file-name' onClick={handleImageClick}>
              {image ? image.name : "Tải file"}
             <input  className='file-img-info' type="file" ref={inputRef} onChange={handleImageChange}/>
             </label>
               */}
           </div>
         </form>
    </div>
  )
}