import * as ActionType from "../../constant/hotel/facilitiesConstant";

//GET
export const GetFacilitiesRequest = () => ({
  type: ActionType.GET_FACILITIES_REQUEST,
});

export const GetFacilitiesSuccess = (payload: any) => ({
  type: ActionType.GET_FACILITIES_SUCCESS,
  payload,
});

export const GetFacilitiesFailed = (payload: any) => ({
  type: ActionType.GET_FACILITIES_FAILED,
  payload,
});
