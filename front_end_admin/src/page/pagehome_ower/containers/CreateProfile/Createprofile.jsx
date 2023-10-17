import React from 'react'
import "./createprofile.css"
import Inforestaurant from '../../components/info-restaurant-form/Inforestaurant'
import Desrestaurant from '../../components/option-form/Desrestaurant'
import Image from '../../components/image-form/Image'
import Timerestaurant from '../../components/time-form/Timerestaurant'
export default function Createprofile() {
  return (
    <div className='userlist' >
           <div className="title-restaurant">
             <div className="title">
             <h2 className="information-text">TẠO HỒ SƠ NHÀ HÀNG</h2>
            </div>
              <div className="information-restaurant">
                    <Inforestaurant/>
              </div>
              <div className="description-restaurant">
                     <Desrestaurant/>
              </div>
              <div className="img-restaurant">
                     <Image/>
              </div>
              <div className="time-restaurant">
                     <Timerestaurant/>
              </div>
              <div className="addfoot-restaurant">

              </div>
              <div className="button">
                 
              </div>
           </div>
    </div>
  )
}
