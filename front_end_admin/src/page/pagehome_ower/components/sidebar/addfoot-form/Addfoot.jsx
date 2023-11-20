import React, { useState ,useRef} from 'react'
import "./addfoot.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';



export default function Addfoot({handleValue}) {
   const [addfoot, setaddfoot] = useState({
    typeOfRes:"",
    averagePrice:""
   })
   handleValue(addfoot)
   const handle = (e)=>{
        const newdata = {...addfoot}
        newdata[e.target.id] = e.target.value
        setaddfoot(newdata)
    }

   
    
    const inputRef = useRef(null)
    const [image,setImage] = useState("")

    const handleImageClick = ()=>{
    inputRef.current.click();
     }
    const handleImageChange = (event)=>{
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0])
    }
     
    
  return (
    <div className="add-foot-restaurant">
        <span className="title-name">THÊM MÓN ĂN</span>
        <div className="all-add-foot">
        <form >
        <div className="add-foot">
            <span className="title-foot">Món ăn</span>
            <div className="form-foot">
                <input type='text' className='textinput' id='typeOfRes' onChange={(e)=> handle(e)} value={addfoot.typeOfRes}></input>
            </div>
        </div>
        <div className="add-foot">
            <span className="title-foot">Giá Tiền</span>
            <div className="form-foot">
                <input type='text' className='textinput' id='averagePrice' onChange={(e)=> handle(e)} value={addfoot.averagePrice}></input>
            </div>
        </div>
        </form>
        <div className="add-foot">
            <span className="title-foot">Ảnh món ăn</span>
            <div className="form-foot-img" onClick={handleImageClick}>
            <label type='file' className='file-upimg'>
             {image ? image.name : <InsertPhotoIcon/>}
             <input type="file" className='file-img-add' ref={inputRef}  onChange={handleImageChange}/>
             </label>
            </div>
        </div>
        <div className="button-foot">
        <button className='button-add-foot'>Thêm món & giá</button>
        <button className='button-delete-foot'>Xóa</button>
        </div>
        </div> 
    </div>
  )
}
