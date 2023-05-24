// import * as ActionType from "../constant/vendorConstant";
import * as ActionType from "../constant/stockDetailConstant";

const INIT_STATE = {
  stockDetails: [],
  stockDetail: [],
  stockDetailStockId: [],
};

const StockDetailReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_STOCKDETAIL_REQUEST:
      return { ...state };
    case ActionType.GET_STOCKDETAIL_SUCCESS:
      return GetStockDetailSuccessfully(state, action);

    case ActionType.GET_STOCKDETAILBYSTOCKID_REQUEST:
      return { ...state };
    case ActionType.GET_STOCKDETAILBYSTOCKID_SUCCESS:
      return GetStockDetailByStockIdSuccessfully(state, action);

    case ActionType.ADD_STOCKDETAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_STOCKDETAIL_SUCCESS:
      return AddStockDetailSuccessfully(state, action);

    case ActionType.FIND_STOCKDETAIL_REQUEST:
      return { ...state };
    case ActionType.FIND_STOCKDETAIL_SUCCESS:
      return FindStockDetailSuccessfully(state, action);

    case ActionType.EDIT_STOCKDETAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_STOCKDETAIL_SUCCESS:
      return EditStockDetailSuccessfully(state, action);

    case ActionType.DEL_STOCKDETAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_STOCKDETAIL_SUCCESS:
      return DeleteStockDetailSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetStockDetailSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    stockDetails: action.payload,
  };
};

const GetStockDetailByStockIdSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    stockDetailStockId: action.payload,
  };
};

const AddStockDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    stockDetails: [...state.stocksDetail, payload],
  };
};

const FindStockDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    stockDetail: payload,
  };
};

const EditStockDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteStockDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default StockDetailReducer;
