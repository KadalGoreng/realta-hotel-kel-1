// import * as ActionType from "../constant/PurchaseOrderHeaderConstant";
import * as ActionType from "../constant/purchaseOrderHeaderConstant";

//GET
export const GetPurchaseOrderHeaderRequest = () => ({
  type: ActionType.GET_PURCHASEORDERHEADER_REQUEST,
});

export const GetPurchaseOrderHeaderSuccess = (payload: any) => ({
  type: ActionType.GET_PURCHASEORDERHEADER_SUCCESS,
  payload,
});

export const GetPurchaseOrderHeaderFailed = (payload: any) => ({
  type: ActionType.GET_PURCHASEORDERHEADER_FAILED,
  payload,
});

//ADD
export const AddPurchaseOrderHeaderRequest = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERHEADER_REQUEST,
  payload,
});

export const AddPurchaseOrderHeaderSuccess = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERHEADER_SUCCESS,
  payload,
});

export const AddPurchaseOrderHeaderFailed = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERHEADER_FAILED,
  payload,
});

//EDIT
export const EditPurchaseOrderHeaderRequest = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERHEADER_REQUEST,
  payload,
});

export const EditPurchaseOrderHeaderSuccess = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERHEADER_SUCCESS,
  payload,
});

export const EditPurchaseOrderHeaderFailed = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERHEADER_FAILED,
  payload,
});

//DELETE
export const DelPurchaseOrderHeaderRequest = (payload: any) => ({
  type: ActionType.DEL_PURCHASEORDERHEADER_REQUEST,
  payload,
});

export const DelPurchaseOrderHeaderSuccess = (payload: any) => ({
  type: ActionType.DEL_PURCHASEORDERHEADER_SUCCESS,
  payload,
});

export const DelPurchaseOrderHeaderFailed = (payload: any) => ({
  type: ActionType.DEL_PURCHASEORDERHEADER_FAILED,
  payload,
});

//FIND
export const FindPurchaseOrderHeaderRequest = (payload: any) => ({
  type: ActionType.FIND_PURCHASEORDERHEADER_REQUEST,
  payload,
});

export const FindPurchaseOrderHeaderSuccess = (payload: any) => ({
  type: ActionType.FIND_PURCHASEORDERHEADER_SUCCESS,
  payload,
});

export const FindPurchaseOrderHeaderFailed = (payload: any) => ({
  type: ActionType.FIND_PURCHASEORDERHEADER_FAILED,
  payload,
});
