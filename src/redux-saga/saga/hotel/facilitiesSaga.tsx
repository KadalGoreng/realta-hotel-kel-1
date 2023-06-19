import facilitiesApi from "@/api/hotel/facilitiesApi";
import { GetFacilitiesFailed, GetFacilitiesSuccess } from "@/redux-saga/action/hotel/facilitiesAction";
import { call, put } from "redux-saga/effects";

function* handlefacilities(): any {
  try {
    const result = yield call(facilitiesApi.GetData);
    console.log(result);
    yield put(GetFacilitiesSuccess(result));
  } catch (error) {
    yield put(GetFacilitiesFailed(error));
  }
}

export { handlefacilities };
