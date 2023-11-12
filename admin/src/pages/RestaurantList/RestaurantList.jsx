import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./restaurantList.css";
import { PaginationComponent } from "../../components";

const RestaurantList = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const ref = useRef()

    useEffect(() => {
        fetchData(pageno);
        // dataSearch();
    }, [pageno]);

    const fetchData = async (pageno) => {
        await axios
            .get(
                `http://localhost:3000/api/restaurant?page=${pageno}&limit=10&fields=resname,address,timeOpen,timeClose,seats,typeOfRes,image`
            )
            .then((res) => {
                console.log(res.data.data)
                // setData(res.data.data);
            });
    };

    const handleDelete = async (resId) => {
        // console.log(resId)
        await axios.delete(`http://localhost:3000/api/restaurant/${resId}`);
        setData((prevData) => prevData.filter((res) => res.id !== resId));
        fetchData();
    };

    // const dataSearch = async (value) => {
    //     await axios
    //         .get(
    //             `http://localhost:3000/api/restaurant/search?search=${value}&page=1&limit=10`
    //         )
    //         .then((res) => {
    //             const result = res.data.data.filter((name) => {
    //                 const nameFood = name.resname;
    //                 return (
    //                     nameFood &&
    //                     value &&
    //                     nameFood.toLowerCase().includes(value)
    //                 );
    //             });
    //             console.log(result)
    //             // setSearchValue(result)
    //             setData(result)
    //         });
    // };

    const handleSearch = (e) => {
        e.preventDefault();
        // dataSearch();
    };

    // const handleChange = (value) => {
    //     setSearchValue(value)
    //     dataSearch(value)
    // }

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
                        ref={ref}
                        value={searchValue}
                        // onChange={(e) => handleChange(e.target.value)}
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
                            <th className="restaurantListCol">Điểm đánh giá</th>
                            <th className="restaurantListCol">
                                Tên chủ nhà hàng
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
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
                                    {item.address.district}, {item.address.city}
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
                                    {item.pointEvaluation}
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
                    activenum={pageno}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default RestaurantList;
