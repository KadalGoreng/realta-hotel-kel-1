import * as ActionType from "../../constant/payment/BankConstant";

const INIT_STATE = {
  banks: [],
  bank: [],
};

const BankReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_BANK_REQUEST:
      return { ...state };
    case ActionType.GET_BANK_SUCCESS:
      return GetBankSuccessfully(state, action);
    case ActionType.ADD_BANK_REQUEST:
      return { ...state };
    case ActionType.ADD_BANK_SUCCESS:
      return AddBankSuccessfully(state, action);
    case ActionType.FIND_BANK_REQUEST:
      return { ...state };
    case ActionType.FIND_BANK_SUCCESS:
      return FindBankSuccessfully(state, action);
    case ActionType.EDIT_BANK_REQUEST:
      return { ...state };
    case ActionType.EDIT_BANK_SUCCESS:
      return EditBankSuccessfully(state, action);
    case ActionType.DEL_BANK_REQUEST:
      return { ...state };
    case ActionType.DEL_BANK_SUCCESS:
      return DelBankSuccessfully(state, action);
    case ActionType.SEARCH_BANK_REQUEST:
      return { ...state };
    case ActionType.SEARCH_BANK_SUCCESS:
      return SearchBankSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetBankSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    banks: action.payload,
  };
};

const AddBankSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    banks: [...state.banks, payload],
  };
};

const FindBankSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    bank: payload,
  };
};

const EditBankSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelBankSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const SearchBankSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    banks: payload,
  };
};
export default BankReduce;
