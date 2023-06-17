import * as ActionType from "../constant/facilityPhotoConstant";

const INIT_STATE = {
  facilityPhoto: [],
};

const FacilityPhotoReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACILITY_PHOTO_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITY_PHOTO_SUCCESS:
      return GetFacilityPhotoSuccessfully(state, action);

    case ActionType.GET_MANY_FACILITY_PHOTO_REQUEST:
      return { ...state };
    case ActionType.GET_MANY_FACILITY_PHOTO_SUCCESS:
      return GetManyFacilityPhotoSuccessfully(state, action);

    case ActionType.ADD_FACILITY_PHOTO_REQUEST:
      return { ...state };
    case ActionType.ADD_FACILITY_PHOTO_SUCCESS:
      return AddFacilityPhotoSuccessfully(state, action);

    case ActionType.EDIT_FACILITY_PHOTO_REQUEST:
      return { ...state };
    case ActionType.EDIT_FACILITY_PHOTO_SUCCESS:
      return EditFacilityPhotoSuccessfully(state, action);

    case ActionType.DEL_FACILITY_PHOTO_REQUEST:
      return { ...state };
    case ActionType.DEL_FACILITY_PHOTO_SUCCESS:
      return DelFacilityPhotoSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetFacilityPhotoSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilityPhoto: payload,
  };
};

const GetManyFacilityPhotoSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilityPhoto: payload,
  };
};

const AddFacilityPhotoSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilityPhoto: [...state.facilityPhoto, payload],
  };
};

const EditFacilityPhotoSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelFacilityPhotoSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default FacilityPhotoReduce;
