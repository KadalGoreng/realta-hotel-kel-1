import * as ActionType from "../constant/hotelsConstant";

const init_state = {
  hotels: [],
  hotel: [],
};

const HotelsReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_HOTELS_REQUEST:
      return { ...state };
    case ActionType.GET_HOTELS_SUCCESS:
      return GetHotels(state, action);
    case ActionType.ADD_HOTELS_REQUEST:
      return { ...state };
    case ActionType.ADD_HOTELS_SUCCESS:
      return AddHotels(state, action);
    case ActionType.FIND_HOTELS_REQUEST:
      return { ...state };
    case ActionType.FIND_HOTELS_SUCCESS:
      return FindHotels(state, action);
    case ActionType.EDIT_HOTELS_REQUEST:
      return { ...state };
    case ActionType.EDIT_HOTELS_SUCCESS:
      return EditHotels(state, action);
    case ActionType.DEL_HOTELS_REQUEST:
      return { ...state };
    case ActionType.DEL_HOTELS_SUCCESS:
      return DelHotels(state, action);
    default:
      return { ...state };
  }
};

const GetHotels = (state: any, action: any) => {
  return {
    ...state,
    hotels: action.payload,
  };
};

const AddHotels = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    hotels: [...state.hotels, payload],
  };
};

const FindHotels = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    hotel: payload,
  };
};

const EditHotels = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelHotels = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default HotelsReduce;
