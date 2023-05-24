// import * as ActionType from "../constant/vendorConstant";
import * as ActionType from "../constant/purchaseOrderHeaderConstant";

const INIT_STATE = {
  PurchaseOrderHeader: [],
  PurchaseOrderHeaders: [],
};

const PurchaseOrderHeaderReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PURCHASEORDERHEADER_REQUEST:
      return { ...state };
    case ActionType.GET_PURCHASEORDERHEADER_SUCCESS:
      return GetPurchaseOrderHeaderSuccessfully(state, action);

    case ActionType.ADD_PURCHASEORDERHEADER_REQUEST:
      return { ...state };
    case ActionType.ADD_PURCHASEORDERHEADER_SUCCESS:
      return AddPurchaseOrderHeaderSuccessfully(state, action);

    case ActionType.FIND_PURCHASEORDERHEADER_REQUEST:
      return { ...state };
    case ActionType.FIND_PURCHASEORDERHEADER_SUCCESS:
      return FindPurchaseOrderHeaderSuccessfully(state, action);

    case ActionType.EDIT_PURCHASEORDERHEADER_REQUEST:
      return { ...state };
    case ActionType.EDIT_PURCHASEORDERHEADER_SUCCESS:
      return EditPurchaseOrderHeaderSuccessfully(state, action);

    case ActionType.DEL_PURCHASEORDERHEADER_REQUEST:
      return { ...state };
    case ActionType.DEL_PURCHASEORDERHEADER_SUCCESS:
      return DeletePurchaseOrderHeaderSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetPurchaseOrderHeaderSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    PurchaseOrderHeaders: action.payload,
  };
};

const AddPurchaseOrderHeaderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    PurchaseOrderHeaders: [...state.stocks, payload],
  };
};

const FindPurchaseOrderHeaderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    PurchaseOrderHeader: payload,
  };
};

const EditPurchaseOrderHeaderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeletePurchaseOrderHeaderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default PurchaseOrderHeaderReducer;
