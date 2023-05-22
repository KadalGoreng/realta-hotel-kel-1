import * as UserProfilesAction from '../../constant/users/user-profilesConstant';

export const GetUserProfilesRequest = () => ({
    type: UserProfilesAction.GET_USERPROFILES_REQUEST,
});

export const GetUserProfilesSuccess = (payload: any) => ({
    type: UserProfilesAction.ADD_USERPROFILES_SUCCESS, payload,
});

export const GetUserProfilesFailed = (payload: any) => ({
    type: UserProfilesAction.GET_USERPROFILES_FAILED, payload,
});

export const AddUserProfilesSuccess = (payload: any) => ({
    type: UserProfilesAction.ADD_USERPROFILES_SUCCESS, payload,
  });
  
  export const AddUserProfilesFailed = (payload: any) => ({
    type: UserProfilesAction.ADD_USERPROFILES_FAILED, payload,
  });
  
  export const DelUserProfilesRequest = (payload: any) => ({
    type: UserProfilesAction.DEL_USERPROFILES_REQUEST, payload,
  });
  
  export const DelUserProfilesSuccess = (payload: any) => ({
    type: UserProfilesAction.DEL_USERPROFILES_SUCCESS, payload,
  });
  
  export const DelUserProfilesFailed = (payload: any) => ({
    type: UserProfilesAction.DEL_USERPROFILES_FAILED, payload,
  });
  
  export const EditUserProfilesRequest = (payload: any) => ({
    type: UserProfilesAction.EDIT_USERPROFILES_REQUEST, payload,
  });
  
  export const EditUserProfilesSuccess = (payload: any) => ({
    type: UserProfilesAction.EDIT_USERPROFILES_SUCCESS, payload,
  });
  
  export const EditUserProfilesFailed = (payload: any) => ({
    type: UserProfilesAction.EDIT_USERPROFILES_FAILED, payload,
  });
  
  export const FindUserProfilesRequest = (payload: any) => ({
    type: UserProfilesAction.FIND_USERPROFILES_REQUEST, payload,
  });
  
  export const FindUserProfilesSuccess = (payload: any) => ({
    type: UserProfilesAction.FIND_USERPROFILES_SUCCESS, payload,
  });
  
  export const FindUserProfilesFailed = (payload: any) => ({
    type: UserProfilesAction.FIND_USERPROFILES_FAILED, payload,
  });