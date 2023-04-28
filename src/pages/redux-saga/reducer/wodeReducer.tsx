import * as ActionType from "../constant/wodeConstant";

const init_state = {
  workdetail: [],
  wode: [],
};

const WodeReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_WODE_REQUEST:
      return { ...state };
    case ActionType.GET_WODE_SUCCESS:
      return GetWode(state, action);

    case ActionType.ADD_WODE_REQUEST:
      return { ...state };
    case ActionType.ADD_WODE_SUCCESS:
      return AddWode(state, action);

    case ActionType.GET_EMP_REQUEST:
      return { ...state };
    case ActionType.GET_EMP_SUCCESS:
      return GetEmp(state, action);

    default:
      return { ...state };
  }
};

const GetWode = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    workdetail: payload,
  };
};

const AddWode = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    workdetail: [...state.workdetail, payload],
  };
};

const GetEmp = (state: any, action: any) => {
  return {
    ...state,
    workdetail: action.payload,
  };
};

export default WodeReduce;
