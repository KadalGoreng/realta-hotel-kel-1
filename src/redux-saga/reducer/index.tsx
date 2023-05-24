import { combineReducers } from "redux";
import HotelsReduce from "./hotelsReducer";
import FacilitiesReduce from "./facilitiesReducer";
import FacilityPhotoReduce from "./facilityPhotoReducer";
import CategoryGroupReduce from "./master/categoryGroupReducer";
import AddressReduce from "./master/addressReducer";

const rootReducer = combineReducers({
  hotelsState: HotelsReduce,
  facilitiesState: FacilitiesReduce,
  facilityPhotoState: FacilityPhotoReduce,
  categoryGroupState: CategoryGroupReduce,
  addressState: AddressReduce,
});

export default rootReducer;
