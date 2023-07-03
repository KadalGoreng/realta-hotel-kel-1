import * as ActionType from '../../constant/users/user-rolesConstant';

const INIT_STATE = {
    userRoles: [],
    UserRoles: []

};

const UserRolesReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERROLES_REQUEST:
            return { ...state };
        case ActionType.GET_USERROLES_SUCCESS:
            return GetUserRolesSuccessfully(state, action);
        case ActionType.ADD_USERROLES_REQUEST:
            return { ...state };
        case ActionType.ADD_USERROLES_SUCCESS:
            return AddUserRolesSuccessfully(state, action);
        case ActionType.EDIT_USERROLES_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERROLES_SUCCESS:
            return EditUserRolesSuccessfully(state, action);
        case ActionType.DEL_USERROLES_REQUEST:
            return { ...state };
        case ActionType.DEL_USERROLES_SUCCESS:
            return DelUserRolesSuccessfully(state, action);
        case ActionType.FIND_USERROLES_REQUEST:
            return { ...state };
        case ActionType.FIND_USERROLES_SUCCESS:
            return FindUserRolesSuccessfully(state, action);
        default:
            return { ...state };
    }
};

const GetUserRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userRoles: payload,
    };
};

const AddUserRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userRoles: [...state.userRoles, payload],
    };
};

const DelUserRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

const FindUserRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        UserRoles: payload,
    };
};

const EditUserRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};
export default UserRolesReducer;