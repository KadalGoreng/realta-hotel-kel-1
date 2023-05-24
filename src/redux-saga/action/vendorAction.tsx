// import * as ActionType from "../constant/VendorConstant";
import * as ActionType from "../constant/vendorConstant";

//GET
export const GetVendorRequest = () => ({
  type: ActionType.GET_VENDOR_REQUEST,
});

export const GetVendorSuccess = (payload: any) => ({
  type: ActionType.GET_VENDOR_SUCCESS,
  payload,
});

export const GetVendorFailed = (payload: any) => ({
  type: ActionType.GET_VENDOR_FAILED,
  payload,
});

//ADD
export const AddVendorRequest = (payload: any) => ({
  type: ActionType.ADD_VENDOR_REQUEST,
  payload,
});

export const AddVendorSuccess = (payload: any) => ({
  type: ActionType.ADD_VENDOR_SUCCESS,
  payload,
});

export const AddVendorFailed = (payload: any) => ({
  type: ActionType.ADD_VENDOR_FAILED,
  payload,
});

//EDIT
export const EditVendorRequest = (payload: any) => ({
  type: ActionType.EDIT_VENDOR_REQUEST,
  payload,
});

export const EditVendorSuccess = (payload: any) => ({
  type: ActionType.EDIT_VENDOR_SUCCESS,
  payload,
});

export const EditVendorFailed = (payload: any) => ({
  type: ActionType.EDIT_VENDOR_FAILED,
  payload,
});

//DELETE
export const DelVendorRequest = (payload: any) => ({
  type: ActionType.DEL_VENDOR_REQUEST,
  payload,
});

export const DelVendorSuccess = (payload: any) => ({
  type: ActionType.DEL_VENDOR_SUCCESS,
  payload,
});

export const DelVendorFailed = (payload: any) => ({
  type: ActionType.DEL_VENDOR_FAILED,
  payload,
});

//FIND
export const FindVendorRequest = (payload: any) => ({
  type: ActionType.FIND_VENDOR_REQUEST,
  payload,
});

export const FindVendorSuccess = (payload: any) => ({
  type: ActionType.FIND_VENDOR_SUCCESS,
  payload,
});

export const FindVendorFailed = (payload: any) => ({
  type: ActionType.FIND_VENDOR_FAILED,
  payload,
});
