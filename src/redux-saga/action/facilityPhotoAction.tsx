import * as ActionFacilityPhoto from "../constant/facilityPhotoConstant";

export const GetFacilityPhotoRequest = (payload: any) => ({
  type: ActionFacilityPhoto.GET_FACILITY_PHOTO_REQUEST,
  payload,
});

export const GetFacilityPhotoSuccess = (payload: any) => ({
  type: ActionFacilityPhoto.GET_FACILITY_PHOTO_SUCCESS,
  payload,
});

export const GetFacilityPhotoFailed = (payload: any) => ({
  type: ActionFacilityPhoto.GET_FACILITY_PHOTO_FAILED,
  payload,
});

export const AddFacilityPhotoRequest = (payload: any) => ({
  type: ActionFacilityPhoto.ADD_FACILITY_PHOTO_REQUEST,
  payload,
});

export const AddFacilityPhotoSuccess = (payload: any) => ({
  type: ActionFacilityPhoto.ADD_FACILITY_PHOTO_SUCCESS,
  payload,
});

export const AddFacilityPhotoFailed = (payload: any) => ({
  type: ActionFacilityPhoto.ADD_FACILITY_PHOTO_FAILED,
  payload,
});

export const EditFacilityPhotoRequest = (payload: any) => ({
  type: ActionFacilityPhoto.EDIT_FACILITY_PHOTO_REQUEST,
  payload,
});

export const EditFacilityPhotoSuccess = (payload: any) => ({
  type: ActionFacilityPhoto.EDIT_FACILITY_PHOTO_SUCCESS,
  payload,
});

export const EditFacilityPhotoFailed = (payload: any) => ({
  type: ActionFacilityPhoto.EDIT_FACILITY_PHOTO_FAILED,
  payload,
});

export const DelFacilityPhotoRequest = (payload: any) => ({
  type: ActionFacilityPhoto.DEL_FACILITY_PHOTO_REQUEST,
  payload,
});

export const DelFacilityPhotoSuccess = (payload: any) => ({
  type: ActionFacilityPhoto.DEL_FACILITY_PHOTO_SUCCESS,
  payload,
});

export const DelFacilityPhotoFailed = (payload: any) => ({
  type: ActionFacilityPhoto.DEL_FACILITY_PHOTO_FAILED,
  payload,
});
