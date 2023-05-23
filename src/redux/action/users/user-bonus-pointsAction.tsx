import * as UserBonusPointsAction from '../../constant/users/user-bonus-pointsConstant';

export const GetUserBonusPointsRequest = () => ({
    type: UserBonusPointsAction.GET_USERBONUSPOINTS_REQUEST,
});

export const GetUserBonusPointsSuccess = (payload: any) => ({
    type: UserBonusPointsAction.ADD_USERBONUSPOINTS_SUCCESS, payload,
});

export const GetUserBonusPointsFailed = (payload: any) => ({
    type: UserBonusPointsAction.GET_USERBONUSPOINTS_FAILED, payload,
});

export const AddUserBonusPointsSuccess = (payload: any) => ({
    type: UserBonusPointsAction.ADD_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const AddUserBonusPointsFailed = (payload: any) => ({
    type: UserBonusPointsAction.ADD_USERBONUSPOINTS_FAILED, payload,
});
  
export const DelUserBonusPointsRequest = (payload: any) => ({
    type: UserBonusPointsAction.DEL_USERBONUSPOINTS_REQUEST, payload,
});
  
export const DelUserBonusPointsSuccess = (payload: any) => ({
    type: UserBonusPointsAction.DEL_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const DelUserBonusPointsFailed = (payload: any) => ({
    type: UserBonusPointsAction.DEL_USERBONUSPOINTS_FAILED, payload,
});
  
export const EditUserBonusPointsRequest = (payload: any) => ({
    type: UserBonusPointsAction.EDIT_USERBONUSPOINTS_REQUEST, payload,
});
  
export const EditUserBonusPointsSuccess = (payload: any) => ({
    type: UserBonusPointsAction.EDIT_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const EditUserBonusPointsFailed = (payload: any) => ({
    type: UserBonusPointsAction.EDIT_USERBONUSPOINTS_FAILED, payload,
});
  
export const FindUserBonusPointsRequest = (payload: any) => ({
    type: UserBonusPointsAction.FIND_USERBONUSPOINTS_REQUEST, payload,
});
  
export const FindUserBonusPointsSuccess = (payload: any) => ({
    type: UserBonusPointsAction.FIND_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const FindUserBonusPointsFailed = (payload: any) => ({
    type: UserBonusPointsAction.FIND_USERBONUSPOINTS_FAILED, payload,
});