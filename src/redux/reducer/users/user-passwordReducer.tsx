import * as ActionType from '../../constant/users/user-passwordConstant';

const init_state = {
    userPassword: [],
    UserPassword: [],

};


const UserPasswordReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERPASSWORD_REQUEST:
            return { ...state };
        case ActionType.GET_USERPASSWORD_SUCCESS:
            return GetUserPasswordSuccessfully(state, action);
        case ActionType.ADD_USERPASSWORD_REQUEST:
            return { ...state };
        case ActionType.ADD_USERPASSWORD_SUCCESS:
            return AddUserPasswordSuccessfully(state, action);
        case ActionType.EDIT_USERPASSWORD_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERPASSWORD_SUCCESS:
            return EditUserPasswordSuccessfully(state, action);
        case ActionType.DEL_USERPASSWORD_REQUEST:
            return { ...state };
        case ActionType.DEL_USERPASSWORD_SUCCESS:
            return DelUserPasswordSuccessfully(state, action);
        case ActionType.FIND_USERPASSWORD_REQUEST:
            return { ...state };
        case ActionType.FIND_USERPASSWORD_SUCCESS:
            return FindUserPasswordSuccessfully(state, action);
        default:
            return { ...state };
        }
    };
          
const GetUserPasswordSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        userPassword: action.payload,
        };
    };
          
const AddUserPasswordSuccessfully = (state: any, action: any) => {
    const { payload } = action;
        return {
            ...state,
            userPassword: [...state.userPassword, payload],
        };
    };
          
const DelUserPasswordSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        };
    };
          
const FindUserPasswordSuccessfully = (state: any, action: any) => {
    const { payload } = action;
        return {
            ...state,
            UserPassword: payload,
        };
    };
          
const EditUserPasswordSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        };
    };
export default UserPasswordReducer;