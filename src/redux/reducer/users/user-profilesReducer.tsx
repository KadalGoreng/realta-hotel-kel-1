import * as ActionType from '../../constant/users/user-profilesConstant';

const init_state = {
    userprofiles: [],
    userprofile: [],

};


const UserProfilesReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERPROFILES_REQUEST:
            return { ...state };
        case ActionType.GET_USERPROFILES_SUCCESS:
            return GetUserProfilesRolesSuccessfully(state, action);
        case ActionType.ADD_USERPROFILES_REQUEST:
            return { ...state };
        case ActionType.ADD_USERPROFILES_SUCCESS:
            return AddUserProfilesRolesSuccessfully(state, action);
        case ActionType.EDIT_USERPROFILES_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERPROFILES_SUCCESS:
            return EditUserProfilesRolesSuccessfully(state, action);
        case ActionType.DEL_USERPROFILES_REQUEST:
            return { ...state };
        case ActionType.DEL_USERPROFILES_SUCCESS:
            return DelUserProfilesRolesSuccessfully(state, action);
        case ActionType.FIND_USERPROFILES_REQUEST:
            return { ...state };
        case ActionType.FIND_USERPROFILES_SUCCESS:
            return FindUserProfilesRolesSuccessfully(state, action);
        default:
            return { ...state };
    }
};

const GetUserProfilesRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userprofiles: payload,
    };
};

const AddUserProfilesRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userprofiles: [...state.userprofiles, payload],
    };
};

const DelUserProfilesRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

const FindUserProfilesRolesSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userprofile: payload,
    };
};

const EditUserProfilesRolesSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};
export default UserProfilesReducer;