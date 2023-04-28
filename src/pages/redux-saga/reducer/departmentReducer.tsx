import * as ActionType from "../constant/departmentConstant";

const init_state = {
  department: [],
  dep: [],
};

const DepartmentReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_DEPARTMENT_REQUEST:
      return { ...state };
    case ActionType.GET_DEPARTMENT_SUCCESS:
      return GetDepartment(state, action);

    case ActionType.ADD_DEPARTMENT_REQUEST:
      return { ...state };
    case ActionType.ADD_DEPARTMENT_SUCCESS:
      return AddDepartment(state, action);

    case ActionType.EDIT_DEPARTMENT_REQUEST:
      return { ...state };
    case ActionType.EDIT_DEPARTMENT_SUCCESS:
      return EditDepartment(state, action);

    case ActionType.FIND_DEPARTMENT_REQUEST:
      return { ...state };
    case ActionType.FIND_DEPARTMENT_SUCCESS:
      return FindDepartment(state, action);

    case ActionType.DEL_DEPARTMENT_REQUEST:
      return { ...state };
    case ActionType.DEL_DEPARTMENT_SUCCESS:
      return DelDepartment(state, action);

    default:
      return { ...state };
  }
};

const GetDepartment = (state: any, action: any) => {
  return {
    ...state,
    department: action.payload,
  };
};

const AddDepartment= (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    department: [...state.department, payload],
  };
};

const DelDepartment = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindDepartment = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    dep: payload,
  };
};

const EditDepartment = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default DepartmentReduce;
