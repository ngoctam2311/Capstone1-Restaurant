import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userList.css";
import RowUser from "./RowUser";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios
            .get("http://localhost:3000/api/user/")
            .then((res) => setData(res.data.data));
    };

    const handleSearch = (e) => {
        e.preventDefault();
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
            </div>
        </div>
    );
};

export default UserList;
