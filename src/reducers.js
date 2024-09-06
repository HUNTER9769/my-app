import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from './actions'

const initialState = {
    loading: false,
    user: null,
    error: null,
};


export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null};
        case REGISTER_SUCCESS:
            return { ...state, loading: false, error: null};
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default authReducer