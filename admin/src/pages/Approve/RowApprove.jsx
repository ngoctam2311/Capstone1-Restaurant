import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import "./approve.css";

const RowApprove = ({ index, item, onRespond }) => {
    const stat = item.status;
    const [menu, setMenu] = useState(false);
    const [status, setStatus] = useState(stat);
    
    // console.log(item)
    const handleStatus = (newStatus) => {
        if (newStatus ===  "accept" || newStatus === "reject") {
            onRespond(newStatus);
        }

        setStatus(newStatus);
        alert(`Đã chuyển sang trạng thái ${newStatus}`)
        setMenu(false);
    };

    const handleIcon = () => {
        setMenu(!menu);
    };

    return (
        <tr className="approveTableRow">
            <th className="listcol">{index + 1}</th>
            <th className="listcol">{item.customerName}</th>
            <th className="listcol">{item.email}</th>
            <th className="listcol">{item.phoneNumber}</th>
            <th className="listcol">{item.updatedAt}</th>
            <th className="listcol ">{item.time}</th>
            <th className="listcol ">{item.numberOfPeople}</th>
            <th className="listcol ">
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
                                onClick={() => handleStatus("accept")}
                            >
                                <AiOutlineCheck className="approveItemIcon" /> Accepted
                            </li>
                            <li
                                className="approveItem"
                                onClick={() => handleStatus(stat)}
                            >
                                <BiDotsHorizontalRounded className="approveItemIcon" />
                                Pending
                            </li>
                            <li
                                className="approveItem"
                                onClick={() => handleStatus("reject")}
                            >
                                <IoCloseOutline className="approveItemIcon" />
                                Rejected
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
