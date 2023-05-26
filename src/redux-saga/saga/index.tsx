import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeHotels from "../constant/hotelsConstant";
import { handleGetHotels, handleAddHotels, handleFindHotels, handleEditHotels, handleDelHotels } from "./HotelsSaga";
import * as ActionTypeFacilities from "../constant/facilitiesConstant";
import * as ActionFacilityPhoto from "../constant/facilityPhotoConstant";
import * as ActionCategoryGroup from "../constant/master/categoryGroupConstant";
import * as ActionAddress from "../constant/master/addressConstant";
import { handleGetFacilities, handleAddFacilities, handleFindFacilities, handleEditFacilities, handleDelFacilities } from "./FacilitiesSaga";
import { handleFacilityPhoto, handleAddFacilityPhoto, editFacilityPhoto, deleteFacilityPhoto, handleFacilityPhotoMany } from "./FacilityPhotoSaga";

import { handleAddress, findAddress } from "./master/AddressSaga";
import { handleCategoryGroup } from "./master/CategoryGroupSaga";

function* watchAll() {
  yield all([
    //hotels
    takeEvery(ActionTypeHotels.GET_HOTELS_REQUEST, handleGetHotels),
    takeEvery(ActionTypeHotels.ADD_HOTELS_REQUEST, handleAddHotels),
    takeEvery(ActionTypeHotels.FIND_HOTELS_REQUEST, handleFindHotels),
    takeEvery(ActionTypeHotels.EDIT_HOTELS_REQUEST, handleEditHotels),
    takeEvery(ActionTypeHotels.DEL_HOTELS_REQUEST, handleDelHotels),

    //facilities
    takeEvery(ActionTypeFacilities.GET_FACILITIES_REQUEST, handleGetFacilities),
    takeEvery(ActionTypeFacilities.ADD_FACILITIES_REQUEST, handleAddFacilities),
    takeEvery(ActionTypeFacilities.FIND_FACILITIES_REQUEST, handleFindFacilities),
    takeEvery(ActionTypeFacilities.EDIT_FACILITIES_REQUEST, handleEditFacilities),
    takeEvery(ActionTypeFacilities.DEL_FACILITIES_REQUEST, handleDelFacilities),

    //facility photo
    takeEvery(ActionFacilityPhoto.GET_FACILITY_PHOTO_REQUEST, handleFacilityPhoto),
    takeEvery(ActionFacilityPhoto.GET_FACILITY_PHOTO_REQUEST, handleFacilityPhotoMany),
    takeEvery(ActionFacilityPhoto.ADD_FACILITY_PHOTO_REQUEST, handleAddFacilityPhoto),
    takeEvery(ActionFacilityPhoto.EDIT_FACILITY_PHOTO_REQUEST, editFacilityPhoto),
    takeEvery(ActionFacilityPhoto.DEL_FACILITY_PHOTO_REQUEST, deleteFacilityPhoto),

    //category group
    takeEvery(ActionCategoryGroup.GET_CATEGORY_GROUP_REQUEST, handleCategoryGroup),

    //address
    takeEvery(ActionAddress.GET_ADDRESS_REQUEST, handleAddress),
    takeEvery(ActionAddress.FIND_ADDRESS_REQUEST, findAddress),
  ]);
}

export default watchAll;
