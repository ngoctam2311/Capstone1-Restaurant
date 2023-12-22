import React from 'react'
import "./sidebar.css"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Sidebaroption from './Sidebaroption';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebar__heading">
                  <img
                      className="sidebar-avatar__img"
                      alt="Ellipse"
                      src="https://c.animaapp.com/vhs2vhQQ/img/ellipse-5@2x.png"
                  />
                <div>
                  <span className="name-owner">Chủ Nhà Hàng</span>
                  <p className="function-name">Chức Năng Chính</p>
                </div>
            </div>
            <div className="sideMenu">
                <div className="sidebarlist">
                   <Link to="/create" className='link'>
                    <div className="sidebarList-item">
                        <NoteAddIcon className="sidebarIcon"/>
                        <p className="name-menu">Tạo hồ sơ nhà hàng</p>
                        </div>
                    </Link>
                    <div className="sidebarList-item">
                        <Sidebaroption />
                    </div>

                    <div className="img-restaurant-sidebar">
                        <img
                            className="imgrestaurant"
                            src="https://c.animaapp.com/0EOLjur4/img/rectangle-262.svg"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
  )
}
