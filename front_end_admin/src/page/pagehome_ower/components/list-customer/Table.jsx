import React from 'react'
import DataTable from 'react-data-table-component'
import "./table.css"
export default function Table() {
  const columns = [
    {
        name: 'Name',
        selector: row => row.name
    },
    {
        name: 'Email',
        selector: row => row.email
    },
    {
        name: 'Age',
        selector: row => row.age
    }
  ];
  const data =[
    {
        id: 1,
        name: 'yousaf',
        email:'skss@gmail.com',
        age:'6'
    },
    {
        id: 2,
        name: 'yipaa',
        email:'15672@gmail.com',
        age:'16'
    },
    {
        id: 3,
        name: 'hùng',
        email:'sbs@gmail.com',
        age:'9'
    },
    {
        id: 4,
        name: 'tann',
        email:'ss@gmail.com',
        age:'20'
    }
  ];
  return (
    <div className='table-customer'>
        <DataTable>
            columns = {columns}
            data = {data}
        </DataTable>
    </div>
  )
}
