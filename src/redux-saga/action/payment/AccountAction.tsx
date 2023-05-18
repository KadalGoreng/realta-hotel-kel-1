import * as ActionType from "../../constant/payment/AccountConstant";
export const GetAccountRequest = () => ({
  type: ActionType.GET_ACCOUNT_REQUEST,
});

export const GetAccountSuccess = (payload: any) => ({
  type: ActionType.GET_ACCOUNT_SUCCESS,
  payload,
});

export const GetAccountFailed = (payload: any) => ({
  type: ActionType.GET_ACCOUNT_FAILED,
  payload,
});

export const AddAccountRequest = (payload: any) => ({
  type: ActionType.ADD_ACCOUNT_REQUEST,
  payload,
});

export const AddAccountSuccess = (payload: any) => ({
  type: ActionType.ADD_ACCOUNT_SUCCESS,
  payload,
});

export const AddAccountFailed = (payload: any) => ({
  type: ActionType.ADD_ACCOUNT_FAILED,
  payload,
});

export const EditAccountRequest = (payload: any) => ({
  type: ActionType.EDIT_ACCOUNT_REQUEST,
  payload,
});

export const EditAccountSuccess = (payload: any) => ({
  type: ActionType.EDIT_ACCOUNT_SUCCESS,
  payload,
});

export const EditAccountFailed = (payload: any) => ({
  type: ActionType.EDIT_ACCOUNT_FAILED,
  payload,
});

export const DelAccountRequest = (payload: any) => ({
  type: ActionType.DEL_ACCOUNT_REQUEST,
  payload,
});

export const DelAccountSuccess = (payload: any) => ({
  type: ActionType.DEL_ACCOUNT_SUCCESS,
  payload,
});

export const DelAccountFailed = (payload: any) => ({
  type: ActionType.DEL_ACCOUNT_FAILED,
  payload,
});

export const FindAccountRequest = (payload: any) => ({
  type: ActionType.FIND_ACCOUNT_REQUEST,
  payload,
});

export const FindAccountSuccess = (payload: any) => ({
  type: ActionType.FIND_ACCOUNT_SUCCESS,
  payload,
});

export const FindAccountFailed = (payload: any) => ({
  type: ActionType.FIND_ACCOUNT_FAILED,
  payload,
});
