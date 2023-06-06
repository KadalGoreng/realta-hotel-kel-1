import * as ActionType from "../Constant/MasterConstant";

const INIT_STATE = {
  regions: [],
  countries: [],
  provinces: [],
  address: [],
  policy: [],
  service: [],
  cagro: [],
  policyByCategory: [],
};

const MasterReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_REGION_REQUEST:
      return { ...state };
    case ActionType.GET_REGION_SUCCESS:
      return getRegionsSuccess(state, action);
    case ActionType.CREATE_REGION_REQUEST:
      return { ...state };
    case ActionType.CREATE_REGION_SUCCESS:
      return createRegionSuccess(state, action);
    case ActionType.DELETE_REGION_REQUEST:
      return { ...state };
    case ActionType.DELETE_REGION_SUCCESS:
      return { ...state };
    case ActionType.GET_COUNTRY_REQUEST:
      return { ...state };
    case ActionType.GET_COUNTRY_SUCCESS:
      return getCountriesSuccess(state, action);
    case ActionType.CREATE_COUNTRY_REQUEST:
      return { ...state };
    case ActionType.CREATE_COUNTRY_SUCCESS:
      return createCountrySuccess(state, action);
    case ActionType.DELETE_COUNTRY_REQUEST:
      return { ...state };
    case ActionType.DELETE_COUNTRY_SUCCESS:
      return { ...state };
    case ActionType.GET_PROVINCE_REQUEST:
      return { ...state };
    case ActionType.GET_PROVINCE_SUCCESS:
      return getProvinceSuccess(state, action);
    case ActionType.CREATE_PROVINCE_REQUEST:
      return { ...state };
    case ActionType.CREATE_PROVINCE_SUCCESS:
      return createProvinceSuccess(state, action);
    case ActionType.DELETE_PROVINCE_REQUEST:
      return { ...state };
    case ActionType.DELETE_PROVINCE_SUCCESS:
      return { ...state };
    case ActionType.GET_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.GET_ADDRESS_SUCCESS:
      return getAddressSuccess(state, action);
    case ActionType.CREATE_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.CREATE_ADDRESS_SUCCESS:
      return createAddressSuccess(state, action);
    case ActionType.DELETE_ADDRESS_REQUEST:
      return { ...state };
    case ActionType.DELETE_ADDRESS_SUCCESS:
      return { ...state };
    case ActionType.GET_POLICY_REQUEST:
      return { ...state };
    case ActionType.GET_POLICY_SUCCESS:
      return getPolicySuccess(state, action);
    case ActionType.CREATE_POLICY_REQUEST:
      return { ...state };
    case ActionType.CREATE_POLICY_SUCCESS:
      return createPolicySuccess(state, action);
    case ActionType.DELETE_POLICY_REQUEST:
      return { ...state };
    case ActionType.DELETE_POLICY_SUCCESS:
      return { ...state };
    case ActionType.GET_SERVICE_REQUEST:
      return { ...state };
    case ActionType.GET_SERVICE_SUCCESS:
      return getServiceSuccess(state, action);
    case ActionType.CREATE_SERVICE_REQUEST:
      return { ...state };
    case ActionType.CREATE_SERVICE_SUCCESS:
      return createServiceSuccess(state, action);
    case ActionType.DELETE_SERVICE_REQUEST:
      return { ...state };
    case ActionType.DELETE_SERVICE_SUCCESS:
      return { ...state };
    case ActionType.GET_CAGRO_REQUEST:
      return { ...state };
    case ActionType.GET_CAGRO_SUCCESS:
      return getCagroSuccess(state, action);
    case ActionType.CREATE_CAGRO_REQUEST:
      return { ...state };
    case ActionType.CREATE_CAGRO_SUCCESS:
      return createCagroSuccess(state, action);
    case ActionType.DELETE_CAGRO_REQUEST:
      return { ...state };
    case ActionType.DELETE_CAGRO_SUCCESS:
      return { ...state };
    case ActionType.GET_POLICYBYCATEG_REQUEST:
      return { ...state };
    case ActionType.GET_POLICYBYCATEG_SUCCESS:
      return getPolicyByCategSuccess(state, action);
    default:
      return { ...state };
  }
};

const getRegionsSuccess = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const createRegionSuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const getCountriesSuccess = (state: any, action: any) => {
  return {
    ...state,
    countries: action.payload,
  };
};

const createCountrySuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    countries: [...state.countries, payload],
  };
};

const getProvinceSuccess = (state: any, action: any) => {
  return {
    ...state,
    provinces: action.payload,
  };
};

const createProvinceSuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    provinces: [...state.provinces, payload],
  };
};

const getAddressSuccess = (state: any, action: any) => {
  return {
    ...state,
    address: action.payload,
  };
};

const createAddressSuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    address: [...state.address, payload],
  };
};

const getServiceSuccess = (state: any, action: any) => {
  return {
    ...state,
    service: action.payload,
  };
};

const createServiceSuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    service: [...state.service, payload],
  };
};

const getCagroSuccess = (state: any, action: any) => {
  return {
    ...state,
    cagro: action.payload,
  };
};

const createCagroSuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    cagro: [...state.cagro, payload],
  };
};

const getPolicySuccess = (state: any, action: any) => {
  return {
    ...state,
    policy: action.payload,
  };
};

const createPolicySuccess = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    policy: [...state.policy, payload],
  };
};

const getPolicyByCategSuccess = (state: any, action: any) => {
  return {
    ...state,
    policyByCategory: action.payload,
  };
};

export default MasterReducer;
