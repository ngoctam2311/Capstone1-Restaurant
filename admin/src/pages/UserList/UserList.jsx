import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./userList.css";
import RowUser from "./RowUser";
import { PaginationComponent } from "../../components";
import { UserContext } from "../../hook/UserContext";

const UserList = () => {
    const [data, setData] = useState([]);
    const [pageno, setPageno] = useState(1);
    const paginationno = 51;

    const { user, loginContext } = useContext(UserContext);

    useEffect(() => {
        fetchData(pageno);
    }, [pageno]);

    const fetchData = async () => {
        await axios
            .get(`http://localhost:3000/api/user?page=${pageno}&limit=10`,{
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTM1YmIxNmMxYzE0MjRkYzM0ODZkMyIsImlhdCI6MTcwMzU4ODc5NCwiZXhwIjoxNzAzNTg5Njk0fQ.lekW07DXvcMYwdyGqoDTE8dld0ujZxqLFE_Wf2H-egk`,
                    // Other headers...
                },
            })
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            });
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
