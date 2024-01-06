import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";

export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const USER_LOGOUT = "USER_LOGOUT";

export const hanldeLoginRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });

        let res = await axios.post(
            "http://localhost:3000/api/auth/login",
            email,
            password
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            // }
        );
        console.log(res);
        // if (res && res.token) {
        //     dispatch({
        //         type: FETCH_USER_SUCCESS,
        //         data: { email, token: res.token },
        //     });
        // } else {
        //     if (res && res.token === 400) {
        //         dispatch({
        //             type: FETCH_USER_ERROR,
        //         });
        //     }
        // }
    };
};
