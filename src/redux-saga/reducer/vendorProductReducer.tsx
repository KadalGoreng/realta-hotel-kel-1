// import * as ActionType from "../constant/VENDORConstant";
import * as ActionType from "../constant/vendorProductConstant";

const INIT_STATE = {
  vendorProducts: [],
  vendorProduct: [],
};

const VendorProductReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_VENDORPRODUCT_REQUEST:
      return { ...state };
    case ActionType.GET_VENDORPRODUCT_SUCCESS:
      return GetVendorProductSuccessfully(state, action);

    case ActionType.ADD_VENDORPRODUCT_REQUEST:
      return { ...state };
    case ActionType.ADD_VENDORPRODUCT_SUCCESS:
      return AddVendorProductSuccessfully(state, action);

    case ActionType.FIND_VENDORPRODUCT_REQUEST:
      return { ...state };
    case ActionType.FIND_VENDORPRODUCT_SUCCESS:
      return FindVendorProductSuccessfully(state, action);

    case ActionType.EDIT_VENDORPRODUCT_REQUEST:
      return { ...state };
    case ActionType.EDIT_VENDORPRODUCT_SUCCESS:
      return EditVendorProductSuccessfully(state, action);

    case ActionType.DEL_VENDORPRODUCT_REQUEST:
      return { ...state };
    case ActionType.DEL_VENDORPRODUCT_SUCCESS:
      return DeleteVendorProductSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetVendorProductSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    vendorProducts: action.payload,
  };
};

const AddVendorProductSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    vendorProducts: [...state.vendorProducts, payload],
  };
};

const FindVendorProductSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    vendorProduct: payload,
  };
};

const EditVendorProductSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteVendorProductSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default VendorProductReducer;
