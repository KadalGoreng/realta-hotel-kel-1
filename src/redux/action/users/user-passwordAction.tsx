import * as UserPasswordAction from '../../constant/users/user-passwordConstant';

export const GetUserPasswordRequest = () => ({
    type: UserPasswordAction.GET_USERPASSWORD_REQUEST,
});

export const GetUserPasswordSuccess = (payload: any) => ({
    type: UserPasswordAction.ADD_USERPASSWORD_SUCCESS, payload,
});

export const GetUserPasswordFailed = (payload: any) => ({
    type: UserPasswordAction.GET_USERPASSWORD_FAILED, payload,
});

export const AddUserPasswordSuccess = (payload: any) => ({
    type: UserPasswordAction.ADD_USERPASSWORD_SUCCESS, payload,
});
  
export const AddUserPasswordFailed = (payload: any) => ({
    type: UserPasswordAction.ADD_USERPASSWORD_FAILED, payload,
});
  
export const DelUserPasswordRequest = (payload: any) => ({
    type: UserPasswordAction.DEL_USERPASSWORD_REQUEST, payload,
});
  
export const DelUserPasswordSuccess = (payload: any) => ({
    type: UserPasswordAction.DEL_USERPASSWORD_SUCCESS, payload,
});
  
  export const DelUserPasswordFailed = (payload: any) => ({
    type: UserPasswordAction.DEL_USERPASSWORD_FAILED, payload,
  });
  
  export const EditUserPasswordRequest = (payload: any) => ({
    type: UserPasswordAction.EDIT_USERPASSWORD_REQUEST, payload,
  });
  
  export const EditUserPasswordSuccess = (payload: any) => ({
    type: UserPasswordAction.EDIT_USERPASSWORD_SUCCESS, payload,
  });
  
  export const EditUserPasswordFailed = (payload: any) => ({
    type: UserPasswordAction.EDIT_USERPASSWORD_FAILED, payload,
  });
  
  export const FindUserPasswordRequest = (payload: any) => ({
    type: UserPasswordAction.FIND_USERPASSWORD_REQUEST, payload,
  });
  
  export const FindUserPasswordSuccess = (payload: any) => ({
    type: UserPasswordAction.FIND_USERPASSWORD_SUCCESS, payload,
  });
  
  export const FindUserPasswordFailed = (payload: any) => ({
    type: UserPasswordAction.FIND_USERPASSWORD_FAILED, payload,
  });