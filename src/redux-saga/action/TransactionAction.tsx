import * as ActionType from "../constant/TransactionConstant";
export const GetTransactionRequest = () => ({
  type: ActionType.GET_TRANSACTION_REQUEST,
});

export const GetTransactionSuccess = (payload: any) => ({
  type: ActionType.GET_TRANSACTION_SUCCESS,
  payload,
});

export const GetTransactionFailed = (payload: any) => ({
  type: ActionType.GET_TRANSACTION_FAILED,
  payload,
});

export const AddTransactionRequest = (payload: any) => ({
  type: ActionType.ADD_TRANSACTION_REQUEST,
  payload,
});

export const AddTransactionSuccess = (payload: any) => ({
  type: ActionType.ADD_TRANSACTION_SUCCESS,
  payload,
});

export const AddTransactionFailed = (payload: any) => ({
  type: ActionType.ADD_TRANSACTION_FAILED,
  payload,
});

export const EditTransactionRequest = (payload: any) => ({
  type: ActionType.EDIT_TRANSACTION_REQUEST,
  payload,
});

export const EditTransactionSuccess = (payload: any) => ({
  type: ActionType.EDIT_TRANSACTION_SUCCESS,
  payload,
});

export const EditTransactionFailed = (payload: any) => ({
  type: ActionType.EDIT_TRANSACTION_FAILED,
  payload,
});

export const DelTransactionRequest = (payload: any) => ({
  type: ActionType.DEL_TRANSACTION_REQUEST,
  payload,
});

export const DelTransactionSuccess = (payload: any) => ({
  type: ActionType.DEL_TRANSACTION_SUCCESS,
  payload,
});

export const DelTransactionFailed = (payload: any) => ({
  type: ActionType.DEL_TRANSACTION_FAILED,
  payload,
});

export const FindTransactionRequest = (payload: any) => ({
  type: ActionType.FIND_TRANSACTION_REQUEST,
  payload,
});

export const FindTransactionSuccess = (payload: any) => ({
  type: ActionType.FIND_TRANSACTION_SUCCESS,
  payload,
});

export const FindTransactionFailed = (payload: any) => ({
  type: ActionType.FIND_TRANSACTION_FAILED,
  payload,
});
