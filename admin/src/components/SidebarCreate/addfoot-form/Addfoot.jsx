import React, { useState , useEffect} from 'react'
import "./addfoot.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

                       
export default function Addfoot({create,Setcreate,handleInputChange,errors}) {
  
  const [add , setadd] = useState()
  
  useEffect(()=>{
    return ()=>{
      add && URL.revokeObjectURL(add.preview)
    }
  },[add])

  const handleImageChange = (event)=>{
    const file = event.target.files[0]

    file.preview = URL.createObjectURL(file)
    setadd(file)

    // set Create
   Setcreate({
    ...create,
    resMenuInfor: file.name
   })
    
  }
   
     
    
  return (
    <div className="add-foot-restaurant">
        <span className="title-name-addfoot">THÊM MÓN ĂN</span>
        <div className="all-add-foot">
        <form >
        <div className="add-foot">
            <span className="title-foot">Món ăn</span>
            <div className="form-foot">
                <input type='text' className='textinput' id='typeOfRes' name='typeOfRes' onChange={handleInputChange} value={create.typeOfRes}></input>
                { errors.typeOfRes && (
                  <span className="account-error">
                  {errors.typeOfRes}
                  </span>
                )}
            </div>
        </div>
        <div className="add-foot">
            <span className="title-foot">Giá Tiền</span>
            <div className="form-foot">
                <input type='text' className='textinput' id='averagePrice' name='averagePrice' onChange={handleInputChange} value={create.averagePrice}></input>
                { errors.averagePrice && (
                  <span className="account-error">
                  {errors.averagePrice}
                  </span>
                )}
            </div>
        </div>
        </form>
        <div className="add-foot">
            <span className="title-foot">Ảnh món ăn</span>
            <div className="form-foot-img">
            <label type='file' className='file-upimg'>
             {add ? add.name : <InsertPhotoIcon/>}
             <input type="file" className='file-img-add'  onChange={handleImageChange}/>
             </label>
            </div>
        </div>
        <div className="button-foot">
        {/* <button className='button-add-foot'>Thêm món & giá</button>
        <button className='button-delete-foot'>Xóa</button> */}
        </div>
        </div> 
    </div>
  )
}