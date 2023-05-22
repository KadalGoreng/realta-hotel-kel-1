import * as UserMembersAction from '../../constant/users/user-membersConstant';

export const GetUserMembersRequest = () => ({
    type: UserMembersAction.GET_USERMEMBERS_REQUEST,
});

export const GetUserMembersSuccess = (payload: any) => ({
    type: UserMembersAction.ADD_USERMEMBERS_SUCCESS, payload,
});

export const GetUserMembersFailed = (payload: any) => ({
    type: UserMembersAction.GET_USERMEMBERS_FAILED, payload,
});

export const AddUserMembersSuccess = (payload: any) => ({
    type: UserMembersAction.ADD_USERMEMBERS_SUCCESS, payload,
});
  
export const AddUserMembersFailed = (payload: any) => ({
    type: UserMembersAction.ADD_USERMEMBERS_FAILED, payload,
});
  
export const DelUserMembersRequest = (payload: any) => ({
    type: UserMembersAction.DEL_USERMEMBERS_REQUEST, payload,
});
  
export const DelUserMembersSuccess = (payload: any) => ({
    type: UserMembersAction.DEL_USERMEMBERS_SUCCESS, payload,
});
  
export const DelUserMembersFailed = (payload: any) => ({
    type: UserMembersAction.DEL_USERMEMBERS_FAILED, payload,
});
  
export const EditUserMembersRequest = (payload: any) => ({
    type: UserMembersAction.EDIT_USERMEMBERS_REQUEST, payload,
});
  
export const EditUserMembersSuccess = (payload: any) => ({
    type: UserMembersAction.EDIT_USERMEMBERS_SUCCESS, payload,
});
  
export const EditUserMembersFailed = (payload: any) => ({
    type: UserMembersAction.EDIT_USERMEMBERS_FAILED, payload,
});
  
export const FindUserMembersRequest = (payload: any) => ({
    type: UserMembersAction.FIND_USERMEMBERS_REQUEST, payload,
});
  
export const FindUserMembersSuccess = (payload: any) => ({
    type: UserMembersAction.FIND_USERMEMBERS_SUCCESS, payload,
});
  
export const FindUserMembersFailed = (payload: any) => ({
    type: UserMembersAction.FIND_USERMEMBERS_FAILED, payload,
});