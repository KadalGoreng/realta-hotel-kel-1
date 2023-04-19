import { combineReducers } from "redux";
import BookingHotelReducer from "./BookingHotelReducer";

const rootReducer = combineReducers({
  bookingHotelState: BookingHotelReducer,
});

export default rootReducer;
