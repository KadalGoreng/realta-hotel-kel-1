import * as ActionType from "../Constant/BookingHotelConstant";

const INIT_STATE = {
  bookingHotel: [],
  hotelFacility: [],
  coupon: [],
};

const BookingHotelReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_BOOKING_REQUEST:
      return { ...state };
    case ActionType.GET_BOOKING_SUCCESS:
      return getHotel(state, action);
    case ActionType.GET_FACILITY_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITY_SUCCESS:
      return getFacility(state, action);
    case ActionType.GET_COUPON_REQUEST:
      return { ...state };
    case ActionType.GET_COUPON_SUCCESS:
      return getCoupon(state, action);
    default:
      return { ...state };
  }
};

const getHotel = (state: any, action: any) => {
  return {
    ...state,
    bookingHotel: action.payload,
  };
};

const getFacility = (state: any, action: any) => {
  return {
    ...state,
    hotelFacility: action.payload,
  };
};

const getCoupon = (state: any, action: any) => {
  return {
    ...state,
    coupon: action.payload,
  };
};

export default BookingHotelReducer;
