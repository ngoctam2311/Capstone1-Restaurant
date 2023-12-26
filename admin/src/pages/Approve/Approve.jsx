import axios from "axios";
import React, { useEffect, useState } from "react";
import "./approve.css";
import RowApprove from "./RowApprove";

const Approve = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await axios
                .get(`http://localhost:3000/api/restaurant/pending`)
                .then((res) => {
                    setData(res.data.data);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchRespond = async (restaurantId, action) => {
        const res = await axios.patch(
            `http://localhost:3000/api/restaurant/respond`,
            {
                restaurantId,
                action,
            }
        );
        setData(res.data.data);
        fetchData();
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        // Get the selected status from the dropdown
        const status = document.getElementById("statusDropdown").value;

        try {
            const response = await axios.get(
                `http://localhost:3000/api/restaurant?status=${status}`
            );
            setData(response.data.data.result);
            // console.log(response.data.data.result)
        } catch (error) {
            console.error("Error searching data:", error);
        }
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
                    <select
                        className="homeGroupInput"
                        name=""
                        id="statusDropdown"
                    >
                        <option value="accepted">accepted</option>
                        <option value="pending">pending</option>
                        <option value="rejected">rejected</option>
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
                            <th className="approveCol">Địa chỉ</th>
                            <th className="approveCol">Chức vụ</th>
                            <th className="approveCol">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <p>đang tải dữ liệu...</p>
                        ) : (
                            data &&
                            data.map((item, index) => (
                                <RowApprove
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    onRespond={(action) =>
                                        fetchRespond(item._id, action)
                                    }
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Approve;
