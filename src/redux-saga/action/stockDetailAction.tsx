import * as ActionType from "../constant/stockDetailConstant";

//GET
export const GetStockDetailRequest = () => ({
  type: ActionType.GET_STOCKDETAIL_REQUEST,
});

export const GetStockDetailSuccess = (payload: any) => ({
  type: ActionType.GET_STOCKDETAIL_SUCCESS,
  payload,
});

export const GetStockDetailFailed = (payload: any) => ({
  type: ActionType.GET_STOCKDETAIL_FAILED,
  payload,
});

//GETStockId
export const GetStockDetailByStockIdRequest = (payload: any) => ({
  type: ActionType.GET_STOCKDETAILBYSTOCKID_REQUEST,
  payload,
});

export const GetStockDetailByStockIdSuccess = (payload: any) => ({
  type: ActionType.GET_STOCKDETAILBYSTOCKID_SUCCESS,
  payload,
});

export const GetStockDetailByStockIdFailed = (payload: any) => ({
  type: ActionType.GET_STOCKDETAILBYSTOCKID_FAILED,
  payload,
});

//ADD
export const AddStockDetailRequest = (payload: any) => ({
  type: ActionType.ADD_STOCKDETAIL_REQUEST,
  payload,
});

export const AddStockDetailSuccess = (payload: any) => ({
  type: ActionType.ADD_STOCKDETAIL_SUCCESS,
  payload,
});

export const AddStockDetailFailed = (payload: any) => ({
  type: ActionType.ADD_STOCKDETAIL_FAILED,
  payload,
});

//EDIT
export const EditStockDetailRequest = (payload: any) => ({
  type: ActionType.EDIT_STOCKDETAIL_REQUEST,
  payload,
});

export const EditStockDetailSuccess = (payload: any) => ({
  type: ActionType.EDIT_STOCKDETAIL_SUCCESS,
  payload,
});

export const EditStockDetailFailed = (payload: any) => ({
  type: ActionType.EDIT_STOCKDETAIL_FAILED,
  payload,
});

//DELETE
export const DelStockDetailRequest = (id: any, stodId: any) => ({
  type: ActionType.DEL_STOCKDETAIL_REQUEST,
  id,
  stodId,
});

export const DelStockDetailSuccess = (payload: any) => ({
  type: ActionType.DEL_STOCKDETAIL_SUCCESS,
  payload,
});

export const DelStockDetailFailed = (payload: any) => ({
  type: ActionType.DEL_STOCKDETAIL_FAILED,
  payload,
});

//FIND
export const FindStockDetailRequest = (payload: any) => ({
  type: ActionType.FIND_STOCKDETAIL_REQUEST,
  payload,
});

export const FindStockDetailSuccess = (payload: any) => ({
  type: ActionType.FIND_STOCKDETAIL_SUCCESS,
  payload,
});

export const FindStockDetailFailed = (payload: any) => ({
  type: ActionType.FIND_STOCKDETAIL_FAILED,
  payload,
});
