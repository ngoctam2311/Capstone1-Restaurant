import React, { useState } from 'react'
import "./timerestaurant.css"


export default function Timerestaurant() {
  return (
    <div className='times-restaurant'>
        <span className="title-time">THỜI GIAN HOẠT ĐỘNG</span>
        <div className="setuptime">
            <div className="setuptime-text">
                <span className="time-name">Thời gian</span>
                <div className="rowflex-grow-1">
                      <div className="col-md-6-1">
                      <input type="time" class="nice-inputw-100" formControlName="startTime" />
                      </div>
                      <div className="col-md-6-2">
                       <input type="time" class="nice-inputw-100 " formControlName="endTime" />
                      </div>
                </div>
            </div>
            <div className='button-time'>
                <button className='time'>Thêm thời gian</button>
            </div>
        </div>
    </div>
  )
}
