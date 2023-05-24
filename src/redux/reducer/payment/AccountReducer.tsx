import * as ActionType from "../../constant/payment/AccountConstant";

const INIT_STATE = {
  allAccounts: [],
  accounts: [],
  account: [],
};

const AccountReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ALL_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.GET_ALL_ACCOUNT_SUCCESS:
      return GetAllAccountSuccessfully(state, action);
    case ActionType.GET_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.GET_ACCOUNT_SUCCESS:
      return GetAccountSuccessfully(state, action);
    case ActionType.ADD_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.ADD_ACCOUNT_SUCCESS:
      return AddAccountSuccessfully(state, action);
    case ActionType.FIND_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.FIND_ACCOUNT_SUCCESS:
      return FindAccountSuccessfully(state, action);
    case ActionType.EDIT_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.EDIT_ACCOUNT_SUCCESS:
      return EditAccountSuccessfully(state, action);
    case ActionType.DEL_ACCOUNT_REQUEST:
      return { ...state };
    case ActionType.DEL_ACCOUNT_SUCCESS:
      return DelAccountSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetAllAccountSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    allAccounts: action.payload,
  };
};

const GetAccountSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    accounts: payload,
  };
};

const AddAccountSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    accounts: [...state.accounts, payload],
  };
};

const FindAccountSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    account: payload,
  };
};

const EditAccountSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelAccountSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default AccountReduce;
