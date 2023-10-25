
import "./timerestaurant.css"


export default function Timerestaurant() {
  return (
    <div className='times-restaurant'>
        <span className="title-time">THỜI GIAN HOẠT ĐỘNG</span>
        <div className="setuptime">
            <div className="setuptime-text">
                <span className="time-name">Thời gian & số lượng</span>
                <div className="rowflex-grow-1">
                      <div className="col-md-6-1">
                      <input type="time" class="nice-inputw-100" formControlName="startTime" />
                      </div>
                      <div className="col-md-6-2">
                       <input type="time" class="nice-inputw-100 " formControlName="endTime" />
                      </div>  
                </div>
                <div className="rowflex-grow-2">
                      <div className="col-md-6-3">
                      <select type="time" class="nice-inputw-100" formControlName="startTime" />
                      </div>
                      <div className="col-md-6-2">
                       <input type="text" class="nice-inputw-100 " formControlName="endTime" />
                      </div>
                </div>
                <div className='button-time'>
                <button className='nice-inputw-150'>
                  <span className="time">Thêm thời gian & SL</span>
                </button>
                <button className='nice-inputw-160'>
                  <span className='delete'>Xóa</span>
                  </button>
            </div>
            </div>
            
        </div>
    </div>
  )
}
