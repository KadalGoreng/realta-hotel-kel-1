import * as ActionType from "../constant/wodoConstant";

const init_state = {
  workorder: [],
  wodo: [],
};

const WodoReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_WODO_REQUEST:
      return { ...state };
    case ActionType.GET_WODO_SUCCESS:
      return GetWodo(state, action);
    case ActionType.GET_USERS_REQUEST:
      return { ...state };
    case ActionType.GET_USERS_SUCCESS:
      return GetUsers(state, action);

    case ActionType.ADD_WODO_REQUEST:
      return { ...state };
    case ActionType.ADD_WODO_SUCCESS:
      return AddWodo(state, action);

    case ActionType.EDIT_WODO_REQUEST:
      return { ...state };
    case ActionType.EDIT_WODO_SUCCESS:
      return EditWodo(state, action);

    case ActionType.FIND_WODO_REQUEST:
      return { ...state };
    case ActionType.FIND_WODO_SUCCESS:
      return FindWodo(state, action);

    case ActionType.DEL_WODO_REQUEST:
      return { ...state };
    case ActionType.DEL_WODO_SUCCESS:
      return DelWodo(state, action);

    default:
      return { ...state };
  }
};

const GetWodo = (state: any, action: any) => {
  return {
    ...state,
    workorder: action.payload,
  };
};

const GetUsers = (state: any, action: any) => {
  return {
    ...state,
    workorder: action.payload,
  };
};

const AddWodo = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    workorder: [...state.workorder, payload],
  };
};

const DelWodo = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindWodo = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    wodo: payload,
  };
};

const EditWodo = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default WodoReduce;
