
import "./createprofile.css"
import Inforestaurant from '../../components/sidebar/info-restaurant-form/Inforestaurant'
import Desrestaurant from '../../components/sidebar/option-form/Desrestaurant'
import Image from '../../components/sidebar/image-form/Image'
import Timerestaurant from '../../components/sidebar/time-form/Timerestaurant'
import Addfoot from '../../components/sidebar/addfoot-form/Addfoot'
import axios from "axios"
import { useState } from "react"

export default function Createprofile() {
 
 const [create,setCreate] = useState('')
  const handleValue = (e) =>{
     
     console.log(e)
  }
  
  const  handleSubmit = (e) =>{
    e.preventDefault()
    
  }
  return (
     <div className="wrapper">
         <div className="header">
            <div className="title">
              <h2 className="infomation-text">TẠO HỒ SƠ NHÀ HÀNG</h2>
            </div>
         </div>
         <form onSubmit={handleSubmit}>
         <div className="maincontent">
            <div className="listcontent">
             <div className="information-restaurant">
                    <Inforestaurant handleValue={handleValue}/>
              </div>
              <div className="description-restaurant">
                     <Desrestaurant handleValue={handleValue}/>
              </div>
              <div className="img-restaurant">
                     <Image/>
              </div>
            </div>
            <div className="listcontent-row2">
            <div className="time-restaurant">
                <Timerestaurant handleValue={handleValue}/>
               </div>
               <div className="addfoot-restaurant">
                 <Addfoot  handleValue={handleValue}/>
              </div>
              <div className="footer-button">
             <div className="button">
                 <button className='save'>Lưu lại</button>
                 <button className='cancel'>Hủy bỏ</button>
              </div>
             </div>
            </div>
         </div>
        </form>
    </div>
  )
}
