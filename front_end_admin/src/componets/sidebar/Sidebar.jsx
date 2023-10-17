import React from 'react'
import "./sidebar.css"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Sidebaroption from './Sidebaroption';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <img className='img' alt="Elipse" src='https://c.animaapp.com/0EOLjur4/img/ellipse-5@2x.png'></img>
         <div className='name-owner'>Tâm Đinh</div>
          <div className='sideMenu'> 
          <p className='function-name'>Chức Năng Chính</p>
            <div className="sidebarlist">
                <div className="sidebarList-item ">
                    <NoteAddIcon className='sidebarIcon'/>
                    <p className='name-menu'>Tạo hồ sơ nhà hàng</p>
                </div>
                <div className="sidebarList-item">
                    <Sidebaroption/>
                    
                </div>
                <div className="sidebarList-item">
                    <EditNoteIcon className='sidebarIcon'/>
                    
                    <p className='name-menu'>Tạo bài viết</p>
                </div>
            </div>
               <div className='img-restaurant'>
                    <img className='imgrestaurant' src='https://c.animaapp.com/0EOLjur4/img/rectangle-262.svg'></img>
               </div>
          </div>
    </div>
  )
}
