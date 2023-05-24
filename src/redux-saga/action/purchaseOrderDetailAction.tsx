import * as ActionType from "../constant/purchaseOrderDetailConstant";

export const AddPurchaseOrderDetailRequest = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERDETAIL_REQUEST,
  payload,
});

export const AddPurchaseOrderDetailSuccess = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERDETAIL_SUCCESS,
  payload,
});

export const AddPurchaseOrderDetailFailed = (payload: any) => ({
  type: ActionType.ADD_PURCHASEORDERDETAIL_FAILED,
  payload,
});

export const EditPurchaseOrderDetailRequest = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERDETAIL_REQUEST,
  payload,
});

export const EditPurchaseOrderDetailSuccess = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERDETAIL_SUCCESS,
  payload,
});

export const EditPurchaseOrderDetailFailed = (payload: any) => ({
  type: ActionType.EDIT_PURCHASEORDERDETAIL_FAILED,
  payload,
});

export const DelPurchaseOrderDetailRequest = (id: any, podeId: any) => ({
  type: ActionType.DEL_PURCHASEORDERDETAIL_REQUEST,
  id,
  podeId,
});

export const DelPurchaseOrderDetailSuccess = (payload: any) => ({
  type: ActionType.DEL_PURCHASEORDERDETAIL_SUCCESS,
  payload,
});

export const DelPurchaseOrderDetailFailed = (payload: any) => ({
  type: ActionType.DEL_PURCHASEORDERDETAIL_FAILED,
  payload,
});
