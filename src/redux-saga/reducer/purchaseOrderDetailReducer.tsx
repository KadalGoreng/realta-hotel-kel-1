import * as ActionType from "../constant/purchaseOrderDetailConstant";

const INIT_STATE = {
  purchaseOrderDetails: [],
};

const PurchaseOrderDetailReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.ADD_PURCHASEORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_PURCHASEORDERDETAIL_SUCCESS:
      return AddPurchaseOrderDetailSuccessfully(state, action);

    case ActionType.EDIT_PURCHASEORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_PURCHASEORDERDETAIL_SUCCESS:
      return EditPurchaseOrderDetailSuccessfully(state, action);

    case ActionType.DEL_PURCHASEORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_PURCHASEORDERDETAIL_SUCCESS:
      return DeletePurchaseOrderDetailSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const EditPurchaseOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const AddPurchaseOrderDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    PurchaseOrderDetails: [...state.purchaseOrderDetail, payload],
  };
};

const DeletePurchaseOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default PurchaseOrderDetailReducer;
