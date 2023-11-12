import React, { useEffect, useState } from "react";
import axios from "axios";
import "./approve.css";
import RowApprove from "./RowApprove";


const Approve = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // await axios
        //     .get(`http://localhost:3000/api/restaurant/?page=1&limit=10`)
        //     .then((res) => setData(res.data.data));
    };

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className="homeAdmin">
            <h2 className="homeAdminHeading">DANH SÁCH NHÀ HÀNG PHÊ DUYỆT</h2>
            <form action="" className="homeForm">
                <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Tên nhà hàng</label>
                    <input
                        className="homeGroupInput"
                        type="text "
                        placeholder="Nhập tên cần tìm"
                    />
                </div>
                <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Trạng thái</label>
                    <select className="homeGroupInput" name="" id="">
                        <option value="0">Đã phê duyệt</option>
                        <option value="1">Chờ phê duyệt</option>
                    </select>
                </div>
                <button className="homebtn" onClick={handleSearch}>
                    Tìm kiếm
                </button>
            </form>
            <div className="approveTable">
                <table>
                    <thead>
                        <tr className="approveTableRow">
                            <th className="approveCol">STT</th>
                            <th className="approveCol">Tên</th>
                            <th className="approveCol">Số điện thoại</th>
                            <th className="approveCol">Email</th>
                            <th className="approveCol">Chức vụ</th>
                            <th className="approveCol">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RowApprove item="1"/>
                        <RowApprove  item="2"/>
                        <RowApprove  item="3"/>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Approve;
