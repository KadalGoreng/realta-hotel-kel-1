import * as ActionWodo from "../constant/wodoConstant";

export const GetWodoRequest = () => ({
  type: ActionWodo.GET_WODO_REQUEST,
});

export const GetWodoSuccess = (payload: any) => ({
  type: ActionWodo.GET_WODO_SUCCESS,
  payload,
});

export const GetWodoFailed = (payload: any) => ({
  type: ActionWodo.GET_WODO_FAILED,
  payload,
});

//
export const GetUsersRequest = () => ({
  type: ActionWodo.GET_USERS_REQUEST,
});

export const GetUsersSuccess = (payload: any) => ({
  type: ActionWodo.GET_USERS_SUCCESS,
  payload,
});

export const GetUsersFailed = (payload: any) => ({
  type: ActionWodo.GET_USERS_FAILED,
  payload,
});

//

export const AddWodoRequest = (payload: any) => ({
  type: ActionWodo.ADD_WODO_REQUEST,
  payload
});

export const AddWodoSuccess = (payload: any) => ({
  type: ActionWodo.ADD_WODO_SUCCESS,
  payload,
});

export const AddWodoFailed = (payload: any) => ({
  type: ActionWodo.ADD_WODO_FAILED,
  payload,
});

//

export const EditWodoRequest = (payload: any) => ({
  type: ActionWodo.EDIT_WODO_REQUEST,
  payload
});

export const EditWodoSuccess = (payload: any) => ({
  type: ActionWodo.EDIT_WODO_SUCCESS,
  payload,
});

export const EditWodoFailed = (payload: any) => ({
  type: ActionWodo.EDIT_WODO_FAILED,
  payload,
});

//

export const FindWodoRequest = (payload: any) => ({
  type: ActionWodo.FIND_WODO_REQUEST,
  payload
});

export const FindWodoSuccess = (payload: any) => ({
  type: ActionWodo.FIND_WODO_SUCCESS,
  payload,
});

export const FindWodoFailed = (payload: any) => ({
  type: ActionWodo.FIND_WODO_FAILED,
  payload,
});

//

export const DelWodoRequest = (payload: any) => ({
  type: ActionWodo.DEL_WODO_REQUEST,
  payload
});

export const DelWodoSuccess = (payload: any) => ({
  type: ActionWodo.DEL_WODO_SUCCESS,
  payload,
});

export const DelWodoFailed = (payload: any) => ({
  type: ActionWodo.DEL_WODO_FAILED,
  payload,
});
