import {
    USER_LOGIN,
    USER_LOGOUT,
    FETCH_USER_LOGIN,
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS,
} from "../actions/userAction";

const INITIAL_STATE = {
    account: { email: "", auth: false, token: "" },
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                account: {
                    auth: false,
                },
            };

        case FETCH_USER_SUCCESS:
            console.log("check:", action);
            return {
                ...state,
                account: {
                    email: action.data.email,
                    token: action.data.token,
                    auth: true,
                },
            };

        default:
            return state;
    }
};

export default userReducer;
