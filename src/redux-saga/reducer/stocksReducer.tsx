// import * as ActionType from "../constant/vendorConstant";
import * as ActionType from "../constant/stocksConstant";

const INIT_STATE = {
  stocks: [],
  stock: [],
};

const StocksReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_STOCK_REQUEST:
      return { ...state };
    case ActionType.GET_STOCK_SUCCESS:
      return GetStockSuccessfully(state, action);

    case ActionType.ADD_STOCK_REQUEST:
      return { ...state };
    case ActionType.ADD_STOCK_SUCCESS:
      return AddStockSuccessfully(state, action);

    case ActionType.FIND_STOCK_REQUEST:
      return { ...state };
    case ActionType.FIND_STOCK_SUCCESS:
      return FindStockSuccessfully(state, action);

    case ActionType.EDIT_STOCK_REQUEST:
      return { ...state };
    case ActionType.EDIT_STOCK_SUCCESS:
      return EditStockSuccessfully(state, action);

    case ActionType.DEL_STOCK_REQUEST:
      return { ...state };
    case ActionType.DEL_STOCK_SUCCESS:
      return DeleteStockSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetStockSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    stocks: action.payload,
  };
};

const AddStockSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    stocks: [...state.stocks, payload],
  };
};

const FindStockSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    stock: payload,
  };
};

const EditStockSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteStockSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default StocksReducer;
