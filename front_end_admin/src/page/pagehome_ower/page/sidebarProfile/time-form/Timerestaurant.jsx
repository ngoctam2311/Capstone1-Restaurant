import { useState , useEffect  } from "react"
import "./timerestaurant.css"
import axios from "axios"

export default function Timerestaurant() {
  const [resSeats,setresSeats] = useState([])
  
    // get api
    useEffect(()=>{
      axios.get('http://localhost:5556/api/restaurant/')
      .then(res => setresSeats(res.data.data))
      .catch(err => console.log(err))
    },[])


   
  return (
    <div className='times-restaurant'>
        <span className="title-time">THỜI GIAN HOẠT ĐỘNG</span>
        <div className="setuptime">
            <div className="setuptime-text">
                <span className="time-name">Thời gian & số lượng</span>
                <div className="rowflex-grow-1">
                      <div className="col-md-6-1">
                      <input type="time" class="nice-inputw-100"  id="timeOpen" name="timeOpen" />
                      </div>
                      <div className="col-md-6-2">
                       <input type="time" class="nice-inputw-100 " id="timeClose" name="timeClose" />
                      </div>  
                </div>
                <div className="rowflex-grow-2">
                      <div className="col-md-6-3">
                      <select className="nice-inputw-100" name="seats" id="seats" >
                        <option value={''}>Chọn số bàn</option>
                           {
                             resSeats.map((seat)=>(
                                <option value={seat.seats} key={seat._id}>{seat.seats}</option>
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