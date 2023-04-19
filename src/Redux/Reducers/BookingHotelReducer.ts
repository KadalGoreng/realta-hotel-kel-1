import * as ActionType from "../Constant/BookingHotelConstant";

const INIT_STATE = {
  bookingHotel: [],
};

const BookingHotelReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_BOOKING_REQUEST:
      return { ...state };
    case ActionType.GET_BOOKING_SUCCESS:
      return getHotel(state, action);
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

export default BookingHotelReducer;
