import MasterApi from "@/api/MasterModule";
import { call, put } from "redux-saga/effects";
import {
  GetPolicyFailed,
  GetPolicySuccess,
  GetRegionsFailed,
  GetRegionsSuccess,
} from "../Actions/masterAction";

function* GetRegions(): any {
  try {
    const result = yield call(MasterApi.getRegions);
    if (result.status === 200) {
      yield put(GetRegionsSuccess(result.data));
    }
  } catch (error) {
    yield put(GetRegionsFailed(error));
  }
}

function* GetPolicy(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(MasterApi.policyByCategories, payload);
    yield put(GetPolicySuccess(result.data));
  } catch (error) {
    yield put(GetPolicyFailed(error));
  }
}

export { GetRegions, GetPolicy };
