import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./restaurantList.css";
import { PaginationComponent } from "../../components";
import { UserContext } from "../../hook/UserContext";

const RestaurantList = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const paginationno = 42;

    useEffect(() => {
        fetchData(pageno);
        dataSearch(searchValue, pageno);
    }, [pageno, searchValue]);

    const { user } = useContext(UserContext);

    const option = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.auth}`,
        },
    };

    const fetchData = async (pageno) => {
        try {
            await axios
                .get(
                    `http://localhost:3000/api/restaurant?page=${pageno}&limit=10`,
                    option
                )
                .then((res) => {
                    setData(res.data.data.result);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (resId) => {
        console.log(resId);
        await axios.delete(
            `http://localhost:3000/api/restaurant/${resId}`,
            option
        );
        setData((prevData) => prevData.filter((res) => res.id !== resId));
        fetchData();
        alert("Xóa nhà hàng thành công");
    };

    const dataSearch = async (value, pageno) => {
        await axios
            .get(
                `http://localhost:3000/api/restaurant/search?search=${value}&page=${pageno}&limit=10`,
                option
            )
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data.data);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dataSearch(searchValue);
    };

    const handleClick = (number) => {
        setPageno(number);
    };

    return (
        <div className="homeAdmin">
            <h2 className="homeAdminHeading">DANH SÁCH NHÀ HÀNG</h2>
            <form action="" className="homeForm">
                <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Tên nhà hàng</label>
                    <input
                        className="homeGroupInput"
                        type="text "
                        placeholder="Nhập tên cần tìm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <button className="homebtn" onClick={handleSearch}>
                    Tìm kiếm
                </button>
            </form>
            <div className="restaurantListTable">
                <table>
                    <thead>
                        <tr className="restaurantListTableRow">
                            <th className="restaurantListCol">STT</th>
                            <th className="restaurantListCol">Tên nhà hàng</th>
                            <th className="restaurantListCol">Địa chỉ</th>
                            <th className="restaurantListCol">Thời gian mở</th>
                            <th className="restaurantListCol">
                                Thời gian đóng
                            </th>
                            <th className="restaurantListCol">Số chỗ</th>
                            <th className="restaurantListCol">
                                Giá trung bình
                            </th>
                            <th className="restaurantListCol">
                                Loại hình nhà hàng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => {
                                return item.resname
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase());
                            })
                            .map((item, index) => (
                                <tr
                                    className="restaurantListTableRow "
                                    key={item._id}
                                    item-data={item._id}
                                >
                                    <th className="restaurantListCol">
                                        {index + 1}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.resname}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.address.street},{" "}
                                        {item.address.district},{" "}
                                        {item.address.city}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.timeOpen}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.timeClose}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.seats}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.averagePrice}
                                    </th>
                                    <th className="restaurantListCol">
                                        {item.typeOfRes}
                                    </th>
                                    <th
                                        className="restaurantListCol"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        <button className="restaurantListCol-btn">
                                            Xóa
                                        </button>
                                    </th>
                                </tr>
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

export default RestaurantList;
