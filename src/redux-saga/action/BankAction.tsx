
import * as ActionType from "../constant/BankConstant";
export const GetBankRequest = () => ({
  type: ActionType.GET_BANK_REQUEST,
});

export const GetBankSuccess = (payload: any) => ({
  type: ActionType.GET_BANK_SUCCESS,
  payload,
});

export const GetBankFailed = (payload: any) => ({
  type: ActionType.GET_BANK_FAILED,
  payload,
});

export const AddBankRequest = (payload: any) => ({
  type: ActionType.ADD_BANK_REQUEST,
  payload,
});

export const AddBankSuccess = (payload: any) => ({
  type: ActionType.ADD_BANK_SUCCESS,
  payload,
});

export const AddBankFailed = (payload: any) => ({
  type: ActionType.ADD_BANK_FAILED,
  payload,
});

export const EditBankRequest = (payload: any) => ({
  type: ActionType.EDIT_BANK_REQUEST,
  payload,
});

export const EditBankSuccess = (payload: any) => ({
  type: ActionType.EDIT_BANK_SUCCESS,
  payload,
});

export const EditBankFailed = (payload: any) => ({
  type: ActionType.EDIT_BANK_FAILED,
  payload,
});

export const DelBankRequest = (payload: any) => ({
  type: ActionType.DEL_BANK_REQUEST,
  payload,
});

export const DelBankSuccess = (payload: any) => ({
  type: ActionType.DEL_BANK_SUCCESS,
  payload,
});

export const DelBankFailed = (payload: any) => ({
  type: ActionType.DEL_BANK_FAILED,
  payload,
});

export const FindBankRequest = (payload: any) => ({
  type: ActionType.FIND_BANK_REQUEST,
  payload,
});

export const FindBankSuccess = (payload: any) => ({
  type: ActionType.FIND_BANK_SUCCESS,
  payload,
});

export const FindBankFailed = (payload: any) => ({
  type: ActionType.FIND_BANK_FAILED,
  payload,
});
