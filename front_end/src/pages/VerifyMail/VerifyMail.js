import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import axios from "axios";

const VerifyMail = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState("pending");
  let code = searchParams.get("code");
  useEffect(() => {
    async function verifyMail(userID, token) {
      //   if (!code) return;
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
        console.log(response.data);
        setVerificationStatus(response.data.status);
      } catch (error) {
        // console.error("Error:", error);
        setVerificationStatus("fail");
        console.log(error);
      }
    }

    if (code) {
      //   console.log(code);
      const userID = code.split("-")[0];
      const token = code.split("-")[1];
      verifyMail(userID, token);
    }
  }, [code]);
  return (
    <div>
      {verificationStatus === "pending" && <div>Loading...</div>}
      {verificationStatus === "success" && (
        <div>Email verified successfully!</div>
      )}
      {verificationStatus === "failed" && (
        <div>Verification failed. Please try again.</div>
      )}
    </div>
  );
};

export default VerifyMail;
