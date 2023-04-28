import * as ActionWode from "../constant/wodeConstant";

export const GetWodeRequest = (payload: any) => ({
  type: ActionWode.GET_WODE_REQUEST,
  payload,
});

export const GetWodeSuccess = (payload: any) => ({
  type: ActionWode.GET_WODE_SUCCESS,
  payload,
});

export const GetWodeFailed = (payload: any) => ({
  type: ActionWode.GET_WODE_FAILED,
  payload,
});
//

export const AddWodeRequest = (payload: any) => ({
  type: ActionWode.ADD_WODE_REQUEST,
  payload,
});

export const AddWodeSuccess = (payload: any) => ({
  type: ActionWode.ADD_WODE_SUCCESS,
  payload,
});

export const AddWodeFailed = (payload: any) => ({
  type: ActionWode.ADD_WODE_FAILED,
  payload,
});

//
//
export const GetEmpRequest = () => ({
  type: ActionWode.GET_EMP_REQUEST,
});

export const GetEmpSuccess = (payload: any) => ({
  type: ActionWode.GET_EMP_SUCCESS,
  payload,
});

export const GetEmpFailed = (payload: any) => ({
  type: ActionWode.GET_EMP_FAILED,
  payload,
});