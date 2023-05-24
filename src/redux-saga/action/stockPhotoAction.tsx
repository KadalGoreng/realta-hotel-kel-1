import * as ActionType from "../constant/stockPhotoConstant";

//GET
export const GetStockPhotoRequest = () => ({
  type: ActionType.GET_STOCKPHOTO_REQUEST,
});

export const GetStockPhotoSuccess = (payload: any) => ({
  type: ActionType.GET_STOCKPHOTO_SUCCESS,
  payload,
});

export const GetStockPhotoFailed = (payload: any) => ({
  type: ActionType.GET_STOCKPHOTO_FAILED,
  payload,
});

//ADD
export const AddStockPhotoRequest = (payload: any) => ({
  type: ActionType.ADD_STOCKPHOTO_REQUEST,
  payload,
});

export const AddStockPhotoSuccess = (payload: any) => ({
  type: ActionType.ADD_STOCKPHOTO_SUCCESS,
  payload,
});

export const AddStockPhotoFailed = (payload: any) => ({
  type: ActionType.ADD_STOCKPHOTO_FAILED,
  payload,
});

//EDIT
export const EditStockPhotoRequest = (payload: any) => ({
  type: ActionType.EDIT_STOCKPHOTO_REQUEST,
  payload,
});

export const EditStockPhotoSuccess = (payload: any) => ({
  type: ActionType.EDIT_STOCKPHOTO_SUCCESS,
  payload,
});

export const EditStockPhotoFailed = (payload: any) => ({
  type: ActionType.EDIT_STOCKPHOTO_FAILED,
  payload,
});

//DELETE
export const DelStockPhotoRequest = (payload: any) => ({
  type: ActionType.DEL_STOCKPHOTO_REQUEST,
  payload,
});

export const DelStockPhotoSuccess = (payload: any) => ({
  type: ActionType.DEL_STOCKPHOTO_SUCCESS,
  payload,
});

export const DelStockPhotoFailed = (payload: any) => ({
  type: ActionType.DEL_STOCKPHOTO_FAILED,
  payload,
});

//FIND
export const FindStockPhotoRequest = (payload: any) => ({
  type: ActionType.FIND_STOCKPHOTO_REQUEST,
  payload,
});

export const FindStockPhotoSuccess = (payload: any) => ({
  type: ActionType.FIND_STOCKPHOTO_SUCCESS,
  payload,
});

export const FindStockPhotoFailed = (payload: any) => ({
  type: ActionType.FIND_STOCKPHOTO_FAILED,
  payload,
});
