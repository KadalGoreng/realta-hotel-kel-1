import * as ActionType from "../../constant/payment/TransactionConstant";

const INIT_STATE = {
  transactions: [],
  transaction: [],
};

const TransactionReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.GET_TRANSACTION_SUCCESS:
      return GetTransactionSuccessfully(state, action);
    case ActionType.ADD_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.ADD_TRANSACTION_SUCCESS:
      return AddTransactionSuccessfully(state, action);
    case ActionType.FIND_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.FIND_TRANSACTION_SUCCESS:
      return FindTransactionSuccessfully(state, action);
    case ActionType.SEARCH_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.SEARCH_TRANSACTION_SUCCESS:
      return SearchTransactionSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetTransactionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    transactions: action.payload,
  };
};

const AddTransactionSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    transactions: [...state.Transactions, payload],
  };
};

const FindTransactionSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    transaction: payload,
  };
};

const SearchTransactionSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    transactions: payload,
  };
};

export default TransactionReduce;
