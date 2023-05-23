import * as ActionType from "../Constant/MasterConstant";

export const GetRegionsRequest = () => ({
  type: ActionType.GET_REGIONS_REQUEST,
});

export const GetRegionsSuccess = (payload: any) => ({
  type: ActionType.GET_REGIONS_SUCCESS,
  payload,
});

export const GetRegionsFailed = (payload: any) => ({
  type: ActionType.GET_REGIONS_FAILED,
  payload,
});

export const GetPolicyRequest = (payload: any) => ({
  type: ActionType.GET_POLICY_REQUEST,
  payload,
});

export const GetPolicySuccess = (payload: any) => ({
  type: ActionType.GET_POLICY_SUCCESS,
  payload,
});

export const GetPolicyFailed = (payload: any) => ({
  type: ActionType.GET_POLICY_FAILED,
  payload,
});
