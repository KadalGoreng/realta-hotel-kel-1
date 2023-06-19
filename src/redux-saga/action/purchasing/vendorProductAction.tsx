import * as ActionType from "../../constant/purchasing/vendorProductConstant";

//GET
export const GetVendorProductRequest = (name: any, price: any) => ({
  type: ActionType.GET_VENDORPRODUCT_REQUEST,
  name,
  price,
});

export const GetVendorProductSuccess = (payload: any) => ({
  type: ActionType.GET_VENDORPRODUCT_SUCCESS,
  payload,
});

export const GetVendorProductFailed = (payload: any) => ({
  type: ActionType.GET_VENDORPRODUCT_FAILED,
  payload,
});

//ADD
export const AddVendorProductRequest = (payload: any) => ({
  type: ActionType.ADD_VENDORPRODUCT_REQUEST,
  payload,
});

export const AddVendorProductSuccess = (payload: any) => ({
  type: ActionType.ADD_VENDORPRODUCT_SUCCESS,
  payload,
});

export const AddVendorProductFailed = (payload: any) => ({
  type: ActionType.ADD_VENDORPRODUCT_FAILED,
  payload,
});

//EDIT
export const EditVendorProductRequest = (payload: any) => ({
  type: ActionType.EDIT_VENDORPRODUCT_REQUEST,
  payload,
});

export const EditVendorProductSuccess = (payload: any) => ({
  type: ActionType.EDIT_VENDORPRODUCT_SUCCESS,
  payload,
});

export const EditVendorProductFailed = (payload: any) => ({
  type: ActionType.EDIT_VENDORPRODUCT_FAILED,
  payload,
});

//DELETE
export const DelVendorProductRequest = (payload: any) => ({
  type: ActionType.DEL_VENDORPRODUCT_REQUEST,
  payload,
});

export const DelVendorProductSuccess = (payload: any) => ({
  type: ActionType.DEL_VENDORPRODUCT_SUCCESS,
  payload,
});

export const DelVendorProductFailed = (payload: any) => ({
  type: ActionType.DEL_VENDORPRODUCT_FAILED,
  payload,
});

//FIND
export const FindVendorProductRequest = (payload: any) => ({
  type: ActionType.FIND_VENDORPRODUCT_REQUEST,
  payload,
});

export const FindVendorProductSuccess = (payload: any) => ({
  type: ActionType.FIND_VENDORPRODUCT_SUCCESS,
  payload,
});

export const FindVendorProductFailed = (payload: any) => ({
  type: ActionType.FIND_VENDORPRODUCT_FAILED,
  payload,
});

//GETVendorId
export const GetVendorProductByVendorIdRequest = (id: any, page: any) => ({
  type: ActionType.FIND_VENDORPRODUCTBYID_REQUEST,
  id,
  page,
});

export const GetVendorProductByVendorIdSuccess = (payload: any) => ({
  type: ActionType.FIND_VENDORPRODUCTBYID_SUCCESS,
  payload,
});

export const GetVendorProductByVendorIdFailed = (payload: any) => ({
  type: ActionType.FIND_VENDORPRODUCTBYID_FAILED,
  payload,
});
