import React, { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./approve.css";
import axios from "axios";

const RowApprove = ({ index, item, onRespond }) => {
    const stat = item.status;
    const id = item._id
    const [menu, setMenu] = useState(false);
    const [status, setStatus] = useState(stat);

    const handleStatus = (newStatus) => {
        if (newStatus ===  "accept" || newStatus === "reject") {
            onRespond(id, newStatus);
        }

        setStatus(newStatus);
        alert(`Đã chuyển sang trạng thái ${newStatus}`)
        setMenu(false);
    };

    const handleIcon = () => {
        setMenu(!menu);
    };

    const handleDelete = (id) => {
        console.log("xóa id: ",id)
        setMenu(false)
    }

    return (
        <tr className="approveTableRow">
            <th className="approveCol">{index + 1}</th>
            <th className="approveCol">{item.resname}</th>
            <th className="approveCol"></th>
            <th className="approveCol"></th>
            <th className="approveCol">chủ nhà hàng</th>
            <th className="approveCol ">
                <div>
                    <span
                        className={
                            status === stat
                                ? "awaitingApproval"
                                : "approved"
                        }
                    >
                        {status}
                    </span>
                    <FaEllipsisVertical
                        onClick={() => handleIcon()}
                        className="tableRowIcon"
                    />
                    {menu && (
                        <div className="approveMenu">
                        <ul className="approve">
                            <li
                                className="approveItem"
                                onClick={() => handleStatus("accepted")}
                            >
                                <AiOutlineCheck className="approveItemIcon" /> accepted
                            </li>
                            <li
                                className="approveItem"
                                onClick={() => handleStatus(stat)}
                            >
                                <BiDotsHorizontalRounded className="approveItemIcon" />
                                {stat}
                            </li>
                            <li
                                className="approveItem"
                                onClick={() => handleStatus("rejected")}
                            >
                                <BiDotsHorizontalRounded className="approveItemIcon" />
                                rejected
                            </li>
                            <li className="approveItem" onClick={() => handleDelete(id)}>
                                <AiOutlineDelete className="approveItemIcon" />
                                Delete
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </th>
        </tr>
    );
};

export default RowApprove;
