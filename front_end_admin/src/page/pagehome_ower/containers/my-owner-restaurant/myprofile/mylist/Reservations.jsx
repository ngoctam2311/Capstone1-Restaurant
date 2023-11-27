import React from 'react'
import "./reservations.css"
import Table from '../../../../components/list-customer/Table'

export default function Reservations() {
  return (
    <div className='wrapper'>
       <div className="header">
            <div className="title-list">
              <h2 className="list-text">DANH SÁCH ĐẶT CHỖ</h2>
            </div>
       </div>
       <div className="maincontent">
           <form className="form">
              <div className="form-col-3">
                 <label className='text-name'>Họ Tên Người Đặt</label>
                 <input type="text"  placeholder='Nhập họ tên người đặt' className='text-input'/>
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Ngày Đặt</label>
                 <input type="date" className='text-input' />
              </div>
              <div className="form-col-3">
                 <label className='text-name'>Trạng Thái</label>
                 <select className='text-input'></select>
              </div>
              <button className='btn-search'>Tìm Kiếm</button>
           </form>
       </div>
       <div className="info-customer">
                <Table/>
           </div>
    </div>
  )
}
