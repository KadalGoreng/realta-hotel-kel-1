// import * as ActionType from "../constant/STOCKConstant";
import * as ActionType from "../constant/stocksConstant";

//GET
export const GetStockRequest = () => ({
  type: ActionType.GET_STOCK_REQUEST,
});

export const GetStockSuccess = (payload: any) => ({
  type: ActionType.GET_STOCK_SUCCESS,
  payload,
});

export const GetStockFailed = (payload: any) => ({
  type: ActionType.GET_STOCK_FAILED,
  payload,
});

//ADD
export const AddStockRequest = (payload: any) => ({
  type: ActionType.ADD_STOCK_REQUEST,
  payload,
});

export const AddStockSuccess = (payload: any) => ({
  type: ActionType.ADD_STOCK_SUCCESS,
  payload,
});

export const AddStockFailed = (payload: any) => ({
  type: ActionType.ADD_STOCK_FAILED,
  payload,
});

//EDIT
export const EditStockRequest = (payload: any) => ({
  type: ActionType.EDIT_STOCK_REQUEST,
  payload,
});

export const EditStockSuccess = (payload: any) => ({
  type: ActionType.EDIT_STOCK_SUCCESS,
  payload,
});

export const EditStockFailed = (payload: any) => ({
  type: ActionType.EDIT_STOCK_FAILED,
  payload,
});

//DELETE
export const DelStockRequest = (payload: any) => ({
  type: ActionType.DEL_STOCK_REQUEST,
  payload,
});

export const DelStockSuccess = (payload: any) => ({
  type: ActionType.DEL_STOCK_SUCCESS,
  payload,
});

export const DelStockFailed = (payload: any) => ({
  type: ActionType.DEL_STOCK_FAILED,
  payload,
});

//FIND
export const FindStockRequest = (payload: any) => ({
  type: ActionType.FIND_STOCK_REQUEST,
  payload,
});

export const FindStockSuccess = (payload: any) => ({
  type: ActionType.FIND_STOCK_SUCCESS,
  payload,
});

export const FindStockFailed = (payload: any) => ({
  type: ActionType.FIND_STOCK_FAILED,
  payload,
});
