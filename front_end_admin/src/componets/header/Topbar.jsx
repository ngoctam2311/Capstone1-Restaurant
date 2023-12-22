import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import {Notification,WrapperNotification} from "../index"


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
           <div className='topLeft'>
           <div className='logo-restaurant'>
             <span className="text-wrapper1">Rest</span>
             <span className="text-wrapper2">aurant</span>
           </div>
           </div>
           <div className='topRight'>
             <div>
               <HeadlessTippy
                 content='thông báo'
                 delay={150}
                 interactive
                 hideOnclick
                 trigger='click'
                 render={(attrs)=>(
                    <WrapperNotification>
                       <div 
                        id='headlessTippy'
                        tabIndex={-1}
                        {...attrs}
                       >
                       <Notification></Notification>
                       <Notification></Notification>
                       <Notification></Notification>
                       <Notification></Notification>
                       <Notification></Notification>
                         
                       </div>
                    </WrapperNotification>
                 )}
               >
                  <div className='topbarIcons'>
                    <FaRegBell className="bell"/>
                    <span className='topIconbell'>5</span>
                  </div>

               </HeadlessTippy>
             </div>
              <div>
                 <Tippy content="Đăng xuất" delay={150}>
                    <div className='topbarIcons' >
                           <TbLogout className="logout"/>
                    </div>
                 </Tippy>
              </div>
           </div>
        </div>
        <div className="slide"></div>
    </div>
  )
}
