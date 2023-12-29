import { useContext } from "react";
import { UserContext } from "../../hook/UserContext";

const { user } = useContext(UserContext);
export const option = {
    config: {
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded;application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.auth}`,
        },
    },
};
