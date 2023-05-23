import { combineReducers } from "redux";
import BookingHotelReducer from "./BookingHotelReducer";
import MasterReducer from "./MasterReducer";

const rootReducer = combineReducers({
  bookingHotelState: BookingHotelReducer,
  masterState: MasterReducer,
});

export default rootReducer;
