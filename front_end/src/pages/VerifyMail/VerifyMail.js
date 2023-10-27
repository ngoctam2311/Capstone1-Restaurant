import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { routes } from "../../Routes/Routes";

const VerifyMail = () => {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [verificationStatus, setVerificationStatus] = useState("pending");
    let code = searchParams.get("code");

    useEffect(() => {
        async function verifyMail(userID, token) {
            console.log("userId: ", userID, "token: ", token);
            try {
                const response = await axios.get(
                    `http://localhost:5555/api/auth/${userID}/verify/${token}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                // console.log("response.data veriry: ", response.data);
                setVerificationStatus(response.data.status);
            } catch (error) {
                // console.error("Error:", error);
                setVerificationStatus("fail");
                console.log(error);
            }
        }

        if (code) {
            const userID = code.split("-")[0];
            const token = code.split("-")[1];
            verifyMail(userID, token);
        }
    }, [code]);

    return (
        <div>
            {verificationStatus === "pending" && <div>Loading...</div>}
            {verificationStatus === "success" && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div>Email verified successfully!</div>
                    <Link
                        to={routes.login}
                        style={{
                            color: "var(--white-color)",
                            backgroundColor: "var(--green-color)",
                            padding: "12px 16px",
                            borderRadius: "6px",
                        }}
                    >
                        Đăng nhập ngay!
                    </Link>
                </div>
            )}
            {verificationStatus === "Failed" && (
                <div>Verification failed. Please try again.</div>
            )}
        </div>
    );
};

export default VerifyMail;
