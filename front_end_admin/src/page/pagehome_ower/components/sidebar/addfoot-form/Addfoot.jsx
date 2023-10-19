import React from 'react'
import "./addfoot.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
export default function Addfoot() {
  return (
    <div className="add-foot-restaurant">
        <span className="title-name">THÊM MÓN ĂN</span>
        <div className="all-add-foot">
        <div className="add-foot">
            <span className="title-foot">Món ăn</span>
            <div className="form-foot">
                <input type='text' className='textinput'></input>
            </div>
        </div>
        <div className="add-foot">
            <span className="title-foot">Giá Tiền</span>
            <div className="form-foot">
                <input type='text' className='textinput'></input>
            </div>
        </div>
        <div className="add-foot">
            <span className="title-foot">Giá Tiền</span>
            <div className="form-foot">
            <label type='file' className='file-upimg'>
            <InsertPhotoIcon/>
             <input type="file" className='file-img'/>
             </label>
            </div>
        </div>
        <div className="button-foot">
        <button className='button-add-foot'>Thêm món & giá</button>
        </div>
        </div> 
    </div>
  )
}
