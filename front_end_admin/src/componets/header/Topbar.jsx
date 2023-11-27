import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

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
             <div className="topbarIcons">
                 <NotificationsIcon className='bell'/>
                 <span className="topIconBell">5</span>
             </div>
             <div className="topbarIcons">
                 <LogoutIcon className='logout' />
             </div>
           </div>
        </div>
        <div className="slide"></div>
    </div>
  )
}
