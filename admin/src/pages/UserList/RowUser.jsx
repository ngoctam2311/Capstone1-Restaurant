import axios from "axios";
import React, { useContext, useState } from "react";
// import { FaEllipsisVertical } from "react-icons/fa6";
// import { PiLockKeyLight } from "react-icons/pi";
// import { PiLockKeyOpenLight } from "react-icons/pi";
import "./userList.css";
import { UserContext } from "../../hook/UserContext";

const RowUser = ({ item, index, fetchData, setData }) => {
    const { user } = useContext(UserContext);

    const option = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.auth}`,
        },
    };

    const handleDelete = async (id) => {
        // console.log(id);
        await axios.delete(`http://localhost:3000/api/user/${id}`, option);
        setData((pre) => pre.filter((user) => user.id !== id));
        fetchData();
        alert("Xóa người dùng thành công");
    };

    return (
        <tr className="UserListTableRow" key={item._id}>
            <th className="UserListCol">{index + 1}</th>
            <th className="UserListCol">{`${item.firstName} ${item.lastName}`}</th>
            <th className="UserListCol"></th>
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
