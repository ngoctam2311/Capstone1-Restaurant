import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { PaginationComponent } from "../../components";

const Home = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [pageno, setPageno] = useState(1);
    const ref = useRef();

    useEffect(() => {
        dataSearch(pageno);
        // userData()
    }, [pageno]);

    const dataSearch = async (value, pageno) => {
        await axios
            .get(
                `http://localhost:3000/api/restaurant/search?search=${value}&page=${pageno}&limit=10`
            )
            .then((res) => {
                setData(res.data);
                const result = res.data.data.filter((name) => {
                    const nameFood = name.resname;
                    return (
                        nameFood &&
                        value &&
                        nameFood.toLowerCase().includes(value)
                    );
                });
                setData(result);
            });
    };

    // const userData = async () => {
    //     const res = await axios.get("http://localhost:3000/api/user")
    //     console.log(res.data)
    // }

    const handleSearch = (e) => {
        e.preventDefault();
        dataSearch();
    };

    const handleChange = (value) => {
        setSearchValue(value);
        dataSearch(value);
    };

    const handleClick = (number) => {
        setPageno(number);
    };

    return (
        <div className="homeAdmin">
            <h2 className="homeAdminHeading">DANH SÁCH CẦN TÌM</h2>
            <form action="" className="homeForm">
                <div className="homeAdminGroup">
                    <label className="homeGroupHeading">Tên nhà hàng</label>
                    <input
                        className="homeGroupInput"
                        type="text "
                        placeholder="Nhập tên cần tìm"
                        ref={ref}
                        value={searchValue}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
                <button className="homebtn" onClick={handleSearch}>
                    Tìm kiếm
                </button>
            </form>
            <div className="homeTable">
                <table>
                    <thead>
                        <tr className="tableRow">
                            <th className="homeCol">STT</th>
                            <th className="homeCol">Tên nhà hàng</th>
                            <th className="homeCol">Địa chỉ</th>
                            <th className="homeCol">Thời gian mở</th>
                            <th className="homeCol">Thời gian đóng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr className="tableRow" key={item._id}>
                                <th className="homeCol">{index + 1}</th>
                                <th className="homeCol">{item.resname}</th>
                                <th className="homeCol">
                                    {item.address.street},{" "}
                                    {item.address.district}, {item.address.city}
                                </th>
                                <th className="homeCol">{item.timeOpen}</th>
                                <th className="homeCol"> {item.timeClose}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {data && data.length >= 10 ? (
                    <PaginationComponent
                        activenum={pageno}
                        handleClick={handleClick}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Home;
