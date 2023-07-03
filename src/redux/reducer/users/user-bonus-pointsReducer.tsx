import * as ActionType from '../../constant/users/user-bonus-pointsConstant';

const init_state = {
    userBonusPoints: [],
    UserBonusPoints: [],

};

const UserBonusPointsReducer = (state = init_state, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERBONUSPOINTS_REQUEST:
            return { ...state };
        case ActionType.GET_USERBONUSPOINTS_SUCCESS:
            return GetUserBonusPointsSuccessfully(state, action);
        case ActionType.ADD_USERBONUSPOINTS_REQUEST:
            return { ...state };
        case ActionType.ADD_USERBONUSPOINTS_SUCCESS:
            return AddUserBonusPointsSuccessfully(state, action);
        case ActionType.EDIT_USERBONUSPOINTS_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERBONUSPOINTS_SUCCESS:
            return EditUserBonusPointsSuccessfully(state, action);
        case ActionType.DEL_USERBONUSPOINTS_REQUEST:
            return { ...state };
        case ActionType.DEL_USERBONUSPOINTS_SUCCESS:
            return DelUserBonusPointsSuccessfully(state, action);
        case ActionType.FIND_USERBONUSPOINTS_REQUEST:
            return { ...state };
        case ActionType.FIND_USERBONUSPOINTS_SUCCESS:
            return FindUserBonusPointsSuccessfully(state, action);
        default:
            return { ...state };
    }
};

const GetUserBonusPointsSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userBonusPoints: payload,
    };
};

const AddUserBonusPointsSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        userBonusPoints: [...state.userBonusPoints, payload],
    };
};

const DelUserBonusPointsSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

const FindUserBonusPointsSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        UserBonusPoints: payload,
    };
};

const EditUserBonusPointsSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

export default UserBonusPointsReducer;