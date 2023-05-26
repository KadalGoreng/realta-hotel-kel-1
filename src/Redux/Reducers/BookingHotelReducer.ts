import * as ActionType from "../Constant/BookingHotelConstant";

const INIT_STATE = {
  bookingHotel: [],
  bookingHistory: [],
  hotelFacility: [],
  coupon: [],
  stocks: [],
  bookingOrder: {},
  boex: [],
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
    case ActionType.GET_BOOKINGHISTORY_REQUEST:
      return { ...state };
    case ActionType.GET_BOOKINGHISTORY_SUCCESS:
      return getBookingHistory(state, action);
    case ActionType.GET_STOCK_REQUEST:
      return { ...state };
    case ActionType.GET_STOCK_SUCCESS:
      return getAddOnItem(state, action);
    case ActionType.CREATE_BOEX_REQUEST:
      return { ...state };
    case ActionType.CREATE_BOEX_SUCCESS:
      return createBoex(state, action);
    case ActionType.CREATE_BOOKINGORDER_SUCCESS:
      return createOrder(state, action);
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

const getBookingHistory = (state: any, action: any) => {
  return {
    ...state,
    bookingHistory: action.payload,
  };
};

const getAddOnItem = (state: any, action: any) => {
  return {
    ...state,
    stocks: action.payload,
  };
};

const createOrder = (state: any, action: any) => {
  return {
    ...state,
    bookingOrder: action.payload,
  };
};

const createBoex = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    boex: [...state.boex, payload],
  };
};

export default BookingHotelReducer;
