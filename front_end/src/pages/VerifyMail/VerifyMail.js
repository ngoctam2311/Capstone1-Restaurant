import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VerifyMail = () => {
    const navigate = useNavigate();
    const { id, code } = useParams();
    console.log(id, code);
    const [verificationStatus, setVerificationStatus] = useState("Pending");

    useEffect(() => {
        const verifyMail = async () => {
            try {
                const response = await axios.post(
                    `http://localhost:3000/user/${id}/verify/${code}`,
                    { id, code },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );

                if (response.data.data.success) {
                    setVerificationStatus("Success");
                    // Do something on success
                } else {
                    setVerificationStatus("Failed");
                    // Handle failed verification
                }
            } catch (error) {
                console.error("Error:", error);
                setVerificationStatus("Failed");
            }
        };

        if (code) {
            verifyMail();
        }
    }, [id, code]);

    return (
        <div>
            {verificationStatus === "Pending" && <div>Loading...</div>}
            {verificationStatus === "Success" && (
                <div>Email verified successfully!</div>
            )}
            {verificationStatus === "Failed" && (
                <div>Verification failed. Please try again.</div>
            )}
        </div>
    );
};

export default VerifyMail;
