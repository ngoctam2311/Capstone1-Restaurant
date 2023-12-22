import { USER_LOGIN, USER_LOGOUT } from "../actions/userAction";

const INITIAL_STATE = {
    account: { email: "", auth: false },
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return 1;

        case USER_LOGOUT:
            return 1;

        default:
            return state;
    }
};

export default userReducer;
