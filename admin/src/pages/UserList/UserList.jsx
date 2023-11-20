import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userList.css";
import RowUser from "./RowUser";
import { PaginationComponent } from "../../components";

const UserList = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);
    const paginationno = 51;

    useEffect(() => {
        fetchData(pageno);
    }, [pageno]);

    const fetchData = async () => {
        await axios
            .get(`http://localhost:3000/api/user?page=${pageno}&limit=10`)
            .then((res) => setData(res.data.data));

            
    };

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleClick = (number) => {
        setPageno(number);
    };

    return (
        <div className="homeAdmin">
            <h2 className="homeAdminHeading">DANH SÁCH NGƯỜI DÙNG</h2>
            <form action="" className="homeForm">
                <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Tên người dùng</label>
                    <input
                        className="homeGroupInput"
                        type="text "
                        placeholder="Nhập tên cần tìm"
                    />
                </div>
                {/* <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Trạng thái</label>
                    <select className="homeGroupInput" name="" id="">
                        <option value="0">Mở khóa</option>
                        <option value="1">Khóa</option>
                    </select>
                </div> */}
                <button className="homebtn" onSubmit={handleSearch}>
                    Tìm kiếm
                </button>
            </form>
            <div className="UserListTable">
                <table>
                    <thead>
                        <tr className="UserListTableRow">
                            <th className="UserListCol">STT</th>
                            <th className="UserListCol">Tên</th>
                            <th className="UserListCol">Số điện thoại</th>
                            <th className="UserListCol">Email</th>
                            <th className="UserListCol">Chức vụ</th>
                            {/* <th className="UserListCol">Trạng thái</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <RowUser key={item._id} item={item} index={index} fetchData={fetchData} setData={setData}/>
                        ))}
                    </tbody>
                </table>
                <PaginationComponent
                maxnum={paginationno}
                    activenum={pageno}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default UserList;
