import * as ActionType from '../../constant/users/rolesConstant';

const init_state = {
    UserRoles : [],
    userRoles: [],

};


const RolesReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_ROLES_REQUEST:
            return { ...state };
        case ActionType.GET_ROLES_SUCCESS:
            return GetRolesSuccessfully(state, action);
        case ActionType.ADD_ROLES_REQUEST:
            return { ...state };
        case ActionType.ADD_ROLES_SUCCESS:
            return AddRolesSuccessfully(state, action);
        case ActionType.EDIT_ROLES_REQUEST:
            return { ...state };
        case ActionType.EDIT_ROLES_SUCCESS:
            return EditRolesSuccessfully(state, action);
        case ActionType.DEL_ROLES_REQUEST:
            return { ...state };
        case ActionType.DEL_ROLES_SUCCESS:
            return DelRolesSuccessfully(state, action);
        case ActionType.FIND_ROLES_REQUEST:
            return { ...state };
        case ActionType.FIND_ROLES_SUCCESS:
            return FindRolesSuccessfully(state, action);
        default:
            return { ...state };
        }
    };
          
const GetRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        UserRoles: action.payload,
        };
    };
          
const AddRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
        return {
            ...state,
            UserRoles: [...state.UserRoles, payload],
        };
    };
          
const DelRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        };
    };
          
const FindRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
        return {
            ...state,
            userRoles: payload,
        };
    };
          
const EditRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
        };
    };

export default RolesReducer;