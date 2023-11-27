import React, { useState,useRef } from 'react'
import "./desrestaurant.css"
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser'

export default function Desrestaurant(props) {
  const editor = useRef(null)
  const [content,setContent] = useState({description:''},)
  const handleInput = (e) =>{
    setContent({...content,[e.target.name]: e.target.value})
    props.childata(content)
  }
 
  props.childata(HTMLReactParser(content)) 
  return (
    <div className="des-restaurant">
          <span className='title-des'> MÔ TẢ NHÀ HÀNG</span>
           <div className="text-editor">
             <JoditEditor 
             ref={editor} 
             value={content.description}
             name='description'
             onChange={ (e)=> handleInput(e)}
            />
           </div>
           <div>{content}</div>
           
    </div>
  )
}
