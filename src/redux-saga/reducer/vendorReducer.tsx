// import * as ActionType from "../constant/VENDORConstant";
import * as ActionType from "../constant/vendorConstant";

const INIT_STATE = {
  vendors: [],
  vendor: [],
};

const VendorReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_VENDOR_REQUEST:
      return { ...state };
    case ActionType.GET_VENDOR_SUCCESS:
      return GetVendorSuccessfully(state, action);

    case ActionType.ADD_VENDOR_REQUEST:
      return { ...state };
    case ActionType.ADD_VENDOR_SUCCESS:
      return AddVendorSuccessfully(state, action);

    case ActionType.FIND_VENDOR_REQUEST:
      return { ...state };
    case ActionType.FIND_VENDOR_SUCCESS:
      return FindVendorSuccessfully(state, action);

    case ActionType.EDIT_VENDOR_REQUEST:
      return { ...state };
    case ActionType.EDIT_VENDOR_SUCCESS:
      return EditVendorSuccessfully(state, action);

    case ActionType.DEL_VENDOR_REQUEST:
      return { ...state };
    case ActionType.DEL_VENDOR_SUCCESS:
      return DeleteVendorSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetVendorSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    vendors: action.payload,
  };
};

const AddVendorSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    vendors: [...state.VENDORs, payload],
  };
};

const FindVendorSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    vendor: payload,
  };
};

const EditVendorSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteVendorSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default VendorReducer;
