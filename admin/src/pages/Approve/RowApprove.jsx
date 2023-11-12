import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "./approve.css";

const RowApprove = ({ item }) => {
    const [status, setStatus] = useState("Đã phê duyệt");

    const handleStatus = (newStatus) => {
        setStatus(newStatus);
    };
    return (
        <tr className="approveTableRow">
            <th className="approveCol">{item}</th>
            <th className="approveCol">Văn Hùng</th>
            <th className="approveCol">0213123123</th>
            <th className="approveCol">hung@gmail.com</th>
            <th className="approveCol">chủ nhà hàng</th>
            <th className="approveCol ">
                <div>
                    <span
                        className={
                            status === "Chờ phê duyệt"
                                ? "awaitingApproval"
                                : "approved"
                        }
                    >
                        {status}
                    </span>
                    <HeadlessTippy
                        content="Thông báo"
                        delay={150}
                        interactive
                        hideOnClick
                        trigger="click"
                        render={(attrs) => (
                            <div
                                className="approveTable-result"
                                tabIndex="-1"
                                {...attrs}
                            >
                                <ul className="approve">
                                    <li
                                        className="approveItem"
                                        onClick={() =>
                                            handleStatus("Đã phê duyệt")
                                        }
                                    >
                                        <AiOutlineCheck className="approveItemIcon" />{" "}
                                        Đã phê duyệt
                                    </li>
                                    <li
                                        className="approveItem"
                                        onClick={() =>
                                            handleStatus("Chờ phê duyệt")
                                        }
                                    >
                                        <BiDotsHorizontalRounded className="approveItemIcon" />
                                        Chờ phê duyệt
                                    </li>
                                    <li className="approveItem">
                                        <AiOutlineDelete className="approveItemIcon" />
                                        Xóa
                                    </li>
                                </ul>
                            </div>
                        )}
                    >
                        <FaEllipsisVertical
                            // onClick={handleIcon}
                            className="tableRowIcon"
                        />
                    </HeadlessTippy>
                </div>
            </th>
        </tr>
    );
};

export default RowApprove;
