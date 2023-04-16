import * as ActionType from "../constant/TransactionConstant";

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
    case ActionType.EDIT_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.EDIT_TRANSACTION_SUCCESS:
      return EditTransactionSuccessfully(state, action);
    case ActionType.DEL_TRANSACTION_REQUEST:
      return { ...state };
    case ActionType.DEL_TRANSACTION_SUCCESS:
      return DelTransactionSuccessfully(state, action);
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

const EditTransactionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelTransactionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default TransactionReduce;
