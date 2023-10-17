import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./sidebar.css"
import { useState } from 'react';
export default function Sidebaroption() {
 const [open,setOpen] = useState(false)

  return (
    <div className={open ? 'sidebaroption open' : 'sidebaroption'}>
        <div className="optionicon">
          <FolderIcon className='sidebarIcon'/>
          <ArrowDropDownCircleIcon className='dropdown' onClick={()=> setOpen(!open)} />
          <p className='name-menu'>Quản lý hồ sơ nhà hàng</p>
        </div>
       <ul className="suvnav">
                <li className='option'>
                    <span className="option-text">Hồ Sơ Nhà Hàng</span>
                </li>
                <li className='option'>
                    <span className="option-text">Danh Sách Đơn Hàng</span>
                </li>
         </ul>
      </div>
  )
}
