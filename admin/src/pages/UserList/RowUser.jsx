import axios from "axios";
import React, { useState } from "react";
// import { FaEllipsisVertical } from "react-icons/fa6";
// import { PiLockKeyLight } from "react-icons/pi";
// import { PiLockKeyOpenLight } from "react-icons/pi";
import "./userList.css";

const RowUser = ({ item, index, fetchData, setData }) => {
    // const [menu, setMenu] = useState(false);
    // const [status, setStatus] = useState("Mở khóa");

    // const handleIcon = () => {
    //     setMenu(!menu);
    // };

    // const handleStatus = (newStatus) => {
    //     setStatus(newStatus);
    //     setMenu(false);
    // };

    const handleDelete = async (id) => {
        // console.log(id)
        await axios.delete(`http://localhost:3000/api/user/${id}`)
        setData(pre => pre.filter(user => user.id !== id))
        fetchData()
        alert("Xóa tài khoản người dùng thành công")
    };

    return (
        <tr className="UserListTableRow" key={item._id}>
            <th className="UserListCol">{index + 1}</th>
            <th className="UserListCol">{`${item.firstName} ${item.lastName}`}</th>
            <th className="UserListCol">0213123123</th>
            <th className="UserListCol">{item.email}</th>
            <th className="UserListCol">{item.role}</th>
            <th className="UserListCol" onClick={() => handleDelete(item._id)}>
                <button className="restaurantListCol-btn">Xóa</button>
            </th>
            {/* <th className="UserListCol ">
                    <div>
                        <span
                            className={status === "Khóa" ? "lockUp" : "unLock"}
                        >
                            {status}
                        </span>
                        <FaEllipsisVertical
                            onClick={handleIcon}
                            className="tableRowIcon"
                        />
                        {menu && (
                            <div className="UserListMenu">
                                <ul className="UserList">
                                    <li
                                        className="UserListItem"
                                        onClick={() => handleStatus("Mở khóa")}
                                    >
                                        <PiLockKeyOpenLight className="UserListItemIcon" />{" "}
                                        Mở khóa
                                    </li>
                                    <li
                                        className="UserListItem"
                                        onClick={() => handleStatus("Khóa")}
                                    >
                                        <PiLockKeyLight className="UserListItemIcon" />
                                        Khóa
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </th> */}
        </tr>
    );
};

export default RowUser;
