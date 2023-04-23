import * as ActionType from "../constant/FintechConstant";
export const GetFintechRequest = () => ({
  type: ActionType.GET_FINTECH_REQUEST,
});

export const GetFintechSuccess = (payload: any) => ({
  type: ActionType.GET_FINTECH_SUCCESS,
  payload,
});

export const GetFintechFailed = (payload: any) => ({
  type: ActionType.GET_FINTECH_FAILED,
  payload,
});

export const AddFintechRequest = (payload: any) => ({
  type: ActionType.ADD_FINTECH_REQUEST,
  payload,
});

export const AddFintechSuccess = (payload: any) => ({
  type: ActionType.ADD_FINTECH_SUCCESS,
  payload,
});

export const AddFintechFailed = (payload: any) => ({
  type: ActionType.ADD_FINTECH_FAILED,
  payload,
});

export const EditFintechRequest = (payload: any) => ({
  type: ActionType.EDIT_FINTECH_REQUEST,
  payload,
});

export const EditFintechSuccess = (payload: any) => ({
  type: ActionType.EDIT_FINTECH_SUCCESS,
  payload,
});

export const EditFintechFailed = (payload: any) => ({
  type: ActionType.EDIT_FINTECH_FAILED,
  payload,
});

export const DelFintechRequest = (payload: any) => ({
  type: ActionType.DEL_FINTECH_REQUEST,
  payload,
});

export const DelFintechSuccess = (payload: any) => ({
  type: ActionType.DEL_FINTECH_SUCCESS,
  payload,
});

export const DelFintechFailed = (payload: any) => ({
  type: ActionType.DEL_FINTECH_FAILED,
  payload,
});

export const FindFintechRequest = (payload: any) => ({
  type: ActionType.FIND_FINTECH_REQUEST,
  payload,
});

export const FindFintechSuccess = (payload: any) => ({
  type: ActionType.FIND_FINTECH_SUCCESS,
  payload,
});

export const FindFintechFailed = (payload: any) => ({
  type: ActionType.FIND_FINTECH_FAILED,
  payload,
});

export const SearchFintechRequest = (payload: any) => ({
  type: ActionType.SEARCH_FINTECH_REQUEST,
  payload,
});

export const SearchFintechSuccess = (payload: any) => ({
  type: ActionType.SEARCH_FINTECH_SUCCESS,
  payload,
});

export const SearchFintechFailed = (payload: any) => ({
  type: ActionType.SEARCH_FINTECH_FAILED,
  payload,
});
