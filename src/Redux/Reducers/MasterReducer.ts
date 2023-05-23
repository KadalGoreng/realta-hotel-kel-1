import * as ActionType from "../Constant/MasterConstant";

const INIT_STATE = {
  regions: [],
  policy: [],
};

const MasterReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_REGIONS_REQUEST:
      return { ...state };
    case ActionType.GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: action.payload,
      };
    case ActionType.GET_REGIONS_FAILED:
      return { ...state };
    case ActionType.GET_POLICY_REQUEST:
      return { ...state };
    case ActionType.GET_POLICY_SUCCESS:
      return {
        ...state,
        policy: action.payload,
      };
    case ActionType.GET_POLICY_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};

export default MasterReducer;
