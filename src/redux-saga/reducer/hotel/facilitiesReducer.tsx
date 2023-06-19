import * as ActionType from "../../constant/hotel/facilitiesConstant";

const INIT_STATE = {
  facilities: [],
};

const FacilitiesReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITIES_SUCCESS:
      return GetFacilitiesSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFacilitiesSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    facilities: action.payload,
  };
};

export default FacilitiesReducer;
