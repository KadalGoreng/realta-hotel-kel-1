import * as ActionType from "../../constant/payment/FintechConstant";

const INIT_STATE = {
  fintechs: [],
  fintech: [],
};

const FintechReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FINTECH_REQUEST:
      return { ...state };
    case ActionType.GET_FINTECH_SUCCESS:
      return GetFintechSuccessfully(state, action);
    case ActionType.ADD_FINTECH_REQUEST:
      return { ...state };
    case ActionType.ADD_FINTECH_SUCCESS:
      return AddFintechSuccessfully(state, action);
    case ActionType.FIND_FINTECH_REQUEST:
      return { ...state };
    case ActionType.FIND_FINTECH_SUCCESS:
      return FindFintechSuccessfully(state, action);
    case ActionType.EDIT_FINTECH_REQUEST:
      return { ...state };
    case ActionType.EDIT_FINTECH_SUCCESS:
      return EditFintechSuccessfully(state, action);
    case ActionType.DEL_FINTECH_REQUEST:
      return { ...state };
    case ActionType.DEL_FINTECH_SUCCESS:
      return DelFintechSuccessfully(state, action);
    case ActionType.SEARCH_FINTECH_REQUEST:
      return { ...state };
    case ActionType.SEARCH_FINTECH_SUCCESS:
      return SearchFintechSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFintechSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    fintechs: action.payload,
  };
};

const AddFintechSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    fintechs: [...state.fintechs, payload],
  };
};

const FindFintechSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    fintech: payload,
  };
};

const EditFintechSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelFintechSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
const SearchFintechSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    fintechs: payload,
  };
};
export default FintechReduce;
