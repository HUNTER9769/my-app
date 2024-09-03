import {LOGIN , REGISTER} from './actions'

const initialState = {
    user: null,

};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN :
            return {...state, user: action.payload};
        case REGISTER : 
            return {...state, user: action.payload};
        default:
            return state;
    }
};

export default authReducer