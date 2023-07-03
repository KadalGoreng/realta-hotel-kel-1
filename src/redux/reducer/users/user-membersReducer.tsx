import * as ActionType from '../../constant/users/user-membersConstant';

const init_state = {
    usermembers: [],
    usermember: [],

};

const UserMembersReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERMEMBERS_REQUEST:
            return { ...state };
        case ActionType.GET_USERMEMBERS_SUCCESS:
            return GetUserMembersSuccessfully(state, action);
        case ActionType.ADD_USERMEMBERS_REQUEST:
            return { ...state };
        case ActionType.ADD_USERMEMBERS_SUCCESS:
            return AddUserMembersSuccessfully(state, action);
        case ActionType.EDIT_USERMEMBERS_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERMEMBERS_SUCCESS:
            return EditUserMembersSuccessfully(state, action);
        case ActionType.DEL_USERMEMBERS_REQUEST:
            return { ...state };
        case ActionType.DEL_USERMEMBERS_SUCCESS:
            return DelUserMembersSuccessfully(state, action);
        case ActionType.FIND_USERMEMBERS_REQUEST:
            return { ...state };
        case ActionType.FIND_USERMEMBERS_SUCCESS:
            return FindUserMembersSuccessfully(state, action);
        default:
            return { ...state };
    }
};

const GetUserMembersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        usermembers: payload,
    };
};

const AddUserMembersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        usermembers: [...state.usermembers, payload],
    };
};

const DelUserMembersSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

const FindUserMembersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        usermember: payload,
    };
};

const EditUserMembersSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

export default UserMembersReducer;