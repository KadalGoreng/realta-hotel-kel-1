import MasterApi from "@/api/MasterModule";
import { call, put } from "redux-saga/effects";
import {
  CreateAddressFailed,
  CreateAddressSuccess,
  CreateCagroFailed,
  CreateCagroSuccess,
  CreateCountryFailed,
  CreateCountrySuccess,
  CreatePolicyFailed,
  CreatePolicySuccess,
  CreateProvinceFailed,
  CreateProvinceSuccess,
  CreateRegionsFailed,
  CreateRegionsSuccess,
  CreateServiceFailed,
  CreateServiceSuccess,
  DeleteAddressFailed,
  DeleteAddressSuccess,
  DeleteCagroFailed,
  DeleteCagroSuccess,
  DeleteCountryFailed,
  DeleteCountrySuccess,
  DeletePolicyFailed,
  DeletePolicySuccess,
  DeleteProvinceFailed,
  DeleteProvinceSuccess,
  DeleteRegionsFailed,
  DeleteRegionsSuccess,
  DeleteServiceFailed,
  DeleteServiceSuccess,
  GetAddressFailed,
  GetAddressSuccess,
  GetCountryFailed,
  GetCountrySuccess,
  GetPolicyByCategFailed,
  GetPolicyByCategSuccess,
  GetPolicyFailed,
  GetPolicySuccess,
  GetProvinceFailed,
  GetProvinceSuccess,
  GetRegionsFailed,
  GetRegionsSuccess,
  GetServiceFailed,
  GetServiceSuccess,
  UpdateAddressFailed,
  UpdateAddressSuccess,
  UpdateCagroFailed,
  UpdateCagroSuccess,
  UpdateCountryFailed,
  UpdateCountrySuccess,
  UpdatePolicyFailed,
  UpdatePolicySuccess,
  UpdateProvinceFailed,
  UpdateProvinceSuccess,
  UpdateRegionsFailed,
  UpdateRegionsSuccess,
  UpdateServiceFailed,
  UpdateServiceSuccess,
} from "../Actions/masterAction";
import { GetCagroFailed, GetCagroSuccess } from "../Actions/BookingHotelAction";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

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

function* CreateRegion(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createRegions,
      payload
    );
    yield put(CreateRegionsSuccess(result.data));
  } catch (error) {
    yield put(CreateRegionsFailed(error));
  }
}

function* UpdateRegion(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateRegions,
      payload
    );
    yield put(UpdateRegionsSuccess(result.data));
  } catch (error) {
    yield put(UpdateRegionsFailed(error));
  }
}

function* DeleteRegion(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteRegions,
      payload
    );
    yield put(DeleteRegionsSuccess(result.data));
  } catch (error) {
    yield put(DeleteRegionsFailed(error));
  }
}

function* GetCountries(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(MasterApi.getCountry, payload);
    if (result.status === 200) {
      yield put(GetCountrySuccess(result.data));
    }
  } catch (error) {
    yield put(GetCountryFailed(error));
  }
}

function* CreateCountry(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createCountries,
      payload
    );
    yield put(CreateCountrySuccess(result.data));
  } catch (error) {
    yield put(CreateCountryFailed(error));
  }
}

function* UpdateCountry(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateCountries,
      payload
    );
    yield put(UpdateCountrySuccess(result.data));
  } catch (error) {
    yield put(UpdateCountryFailed(error));
  }
}

function* DeleteCountry(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteCountries,
      payload
    );
    yield put(DeleteCountrySuccess(result.data));
  } catch (error) {
    yield put(DeleteCountryFailed(error));
  }
}

function* GetProvince(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(MasterApi.getProvinces, payload);
    if (result.status === 200) {
      yield put(GetProvinceSuccess(result.data));
    }
  } catch (error) {
    yield put(GetProvinceFailed(error));
  }
}

function* CreateProvince(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createProvinces,
      payload
    );
    yield put(CreateProvinceSuccess(result.data));
  } catch (error) {
    yield put(CreateProvinceFailed(error));
  }
}

function* UpdateProvince(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateProvinces,
      payload
    );
    yield put(UpdateProvinceSuccess(result.data));
  } catch (error) {
    yield put(UpdateProvinceFailed(error));
  }
}

function* DeleteProvince(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteProvinces,
      payload
    );
    yield put(DeleteProvinceSuccess(result.data));
  } catch (error) {
    yield put(DeleteProvinceFailed(error));
  }
}

function* GetAddress(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(MasterApi.getAddress, payload);
    if (result.status === 200) {
      yield put(GetAddressSuccess(result.data));
    }
  } catch (error) {
    yield put(GetAddressFailed(error));
  }
}

function* CreateAddress(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createAddress,
      payload
    );
    yield put(CreateAddressSuccess(result.data));
  } catch (error) {
    yield put(CreateAddressFailed(error));
  }
}

function* UpdateAddress(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateAddress,
      payload
    );
    yield put(UpdateAddressSuccess(result.data));
  } catch (error) {
    yield put(UpdateAddressFailed(error));
  }
}

function* DeleteAddress(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteAddress,
      payload
    );
    yield put(DeleteAddressSuccess(result.data));
  } catch (error) {
    yield put(DeleteAddressFailed(error));
  }
}

function* GetService(): any {
  try {
    const result = yield call(MasterApi.getService);
    if (result.status === 200) {
      yield put(GetServiceSuccess(result.data));
    }
  } catch (error) {
    yield put(GetServiceFailed(error));
  }
}

function* CreateService(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createService,
      payload
    );
    yield put(CreateServiceSuccess(result.data));
  } catch (error) {
    yield put(CreateServiceFailed(error));
  }
}

function* UpdateService(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateService,
      payload
    );
    yield put(UpdateServiceSuccess(result.data));
  } catch (error) {
    yield put(UpdateServiceFailed(error));
  }
}

function* DeleteService(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteService,
      payload
    );
    yield put(DeleteServiceSuccess(result.data));
  } catch (error) {
    yield put(DeleteServiceFailed(error));
  }
}

function* GetCagro(): any {
  try {
    const result = yield call(MasterApi.getCagro);
    if (result.status === 200) {
      yield put(GetCagroSuccess(result.data));
    }
  } catch (error) {
    yield put(GetCagroFailed(error));
  }
}

function* CreateCagro(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createCagro,
      payload
    );
    yield put(CreateCagroSuccess(result.data));
  } catch (error) {
    yield put(CreateCagroFailed(error));
  }
}

function* UpdateCagro(action: any) {
  const { payload, id } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updateCagro,
      payload,
      id
    );
    yield put(UpdateCagroSuccess(result.data));
  } catch (error) {
    yield put(UpdateCagroFailed(error));
  }
}

function* DeleteCagro(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deleteCagro,
      payload
    );
    yield put(DeleteCagroSuccess(result.data));
  } catch (error) {
    yield put(DeleteCagroFailed(error));
  }
}

function* GetPolicy(): any {
  try {
    const result = yield call(MasterApi.getPolicy);
    if (result.status === 200) {
      yield put(GetPolicySuccess(result.data));
    }
  } catch (error) {
    yield put(GetPolicyFailed(error));
  }
}

function* CreatePolicy(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.createPolicy,
      payload
    );
    yield put(CreatePolicySuccess(result.data));
  } catch (error) {
    yield put(CreatePolicyFailed(error));
  }
}

function* UpdatePolicy(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.updatePolicy,
      payload
    );
    yield put(UpdatePolicySuccess(result.data));
  } catch (error) {
    yield put(UpdatePolicyFailed(error));
  }
}

function* DeletePolicy(action: any) {
  const { payload } = action;
  try {
    const result: ResponseGenerator = yield call(
      MasterApi.deletePolicy,
      payload
    );
    yield put(DeletePolicySuccess(result.data));
  } catch (error) {
    yield put(DeletePolicyFailed(error));
  }
}

function* GetPolicyByCateg(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(MasterApi.policyByCategories, payload);
    yield put(GetPolicyByCategSuccess(result.data));
  } catch (error) {
    yield put(GetPolicyByCategFailed(error));
  }
}

export {
  GetCagro,
  GetPolicy,
  GetRegions,
  GetAddress,
  GetService,
  UpdateCagro,
  DeleteCagro,
  GetProvince,
  CreateCagro,
  GetCountries,
  CreatePolicy,
  UpdateRegion,
  UpdatePolicy,
  DeleteRegion,
  DeletePolicy,
  CreateRegion,
  CreateService,
  UpdateService,
  DeleteService,
  CreateAddress,
  UpdateAddress,
  DeleteAddress,
  CreateCountry,
  UpdateCountry,
  DeleteCountry,
  CreateProvince,
  UpdateProvince,
  DeleteProvince,
  GetPolicyByCateg,
};
