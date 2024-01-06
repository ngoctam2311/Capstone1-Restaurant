import { useState , useEffect  } from "react"
import "./timerestaurant.css"
import axios from "axios"

export default function Timerestaurant({create,Setcreate,handleInputChange}) {
  let number = [5,7,10,20,30];

   
  return (
    <div className='times-restaurant'>
        <span className="title-time">THỜI GIAN HOẠT ĐỘNG</span>
        <div className="setuptime">
            <div className="setuptime-text">
                <span className="time-name">Thời gian & số lượng</span>
                <div className="rowflex-grow-1">
                      <div className="col-md-6-1">
                      <input type="time" class="nice-inputw-100"  id="timeOpen" name="timeOpen" onChange={handleInputChange} value={create.timeOpen}/>
                      </div>
                      <div className="col-md-6-2">
                       <input type="time" class="nice-inputw-100 " id="timeClose" name="timeClose" onChange={handleInputChange} value={create.timeClose}/>
                      </div>  
                </div>
                <div className="rowflex-grow-2">
                      <div className="col-md-6-3">
                      <select className="nice-inputw-100" name="seats" id="seats" onChange={handleInputChange} value={create.seats}>
                        <option value={''}>Chọn số bàn</option>
                           {
                             number.map((seat)=>(
                                <option value={seat}>{seat}</option>
                             ))
                           }
                      </select>
                    
                      </div>
                      {/* <div className="col-md-6-2">
                       <input type="text" class="nice-inputw-100 " formControlName="endTime" />
                      </div> */}
                </div>
                {/* <div className='button-time'>
                <button className='nice-inputw-150'>
                  <span className="time">Thêm thời gian & SL</span>
                </button>
                  <button className='nice-inputw-160'>
                  <span className='delete'>Xóa</span>
                  </button>
            </div> */}
            </div>
            
        </div>
    </div>
  )
}