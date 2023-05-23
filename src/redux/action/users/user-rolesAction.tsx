import * as UserRolesAction from '../../constant/users/user-rolesConstant';

export const GetUserRolesRequest = () => ({
    type: UserRolesAction.GET_USERROLES_REQUEST,
});

export const GetUserRolesSuccess = (payload: any) => ({
    type: UserRolesAction.ADD_USERROLES_SUCCESS, payload,
});

export const GetUserRolesFailed = (payload: any) => ({
    type: UserRolesAction.GET_USERROLES_FAILED, payload,
});

export const AddUserRolesSuccess = (payload: any) => ({
    type: UserRolesAction.ADD_USERROLES_SUCCESS, payload,
  });
  
  export const AddUserRolesFailed = (payload: any) => ({
    type: UserRolesAction.ADD_USERROLES_FAILED, payload,
  });
  
  export const DelUserRolesRequest = (payload: any) => ({
    type: UserRolesAction.DEL_USERROLES_REQUEST, payload,
  });
  
  export const DelUserRolesSuccess = (payload: any) => ({
    type: UserRolesAction.DEL_USERROLES_SUCCESS, payload,
  });
  
  export const DelUserRolesFailed = (payload: any) => ({
    type: UserRolesAction.DEL_USERROLES_FAILED, payload,
  });
  
  export const EditUserRolesRequest = (payload: any) => ({
    type: UserRolesAction.EDIT_USERROLES_REQUEST, payload,
  });
  
  export const EditUserRolesSuccess = (payload: any) => ({
    type: UserRolesAction.EDIT_USERROLES_SUCCESS, payload,
  });
  
  export const EditUserRolesFailed = (payload: any) => ({
    type: UserRolesAction.EDIT_USERROLES_FAILED, payload,
  });
  
  export const FindUserRolesRequest = (payload: any) => ({
    type: UserRolesAction.FIND_USERROLES_REQUEST, payload,
  });
  
  export const FindUserRolesSuccess = (payload: any) => ({
    type: UserRolesAction.FIND_USERROLES_SUCCESS, payload,
  });
  
  export const FindUserRolesFailed = (payload: any) => ({
    type: UserRolesAction.FIND_USERROLES_FAILED, payload,
  });