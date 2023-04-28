import * as ActionDepartment from "../constant/departmentConstant";

export const GetDepartmentRequest = () => ({
  type: ActionDepartment.GET_DEPARTMENT_REQUEST,
});

export const GetDepartmentSuccess = (payload: any) => ({
  type: ActionDepartment.GET_DEPARTMENT_SUCCESS,
  payload,
});

export const GetDepartmentFailed = (payload: any) => ({
  type: ActionDepartment.GET_DEPARTMENT_FAILED,
  payload,
});

export const AddDepartmentRequest = (payload: any) => ({
  type: ActionDepartment.ADD_DEPARTMENT_REQUEST,
  payload,
});

export const AddDepartmentSuccess = (payload: any) => ({
  type: ActionDepartment.ADD_DEPARTMENT_SUCCESS,
  payload,
});

export const AddDepartmentFailed = (payload: any) => ({
  type: ActionDepartment.ADD_DEPARTMENT_FAILED,
  payload,
});

//

export const EditDepartmentRequest = (payload: any) => ({
  type: ActionDepartment.EDIT_DEPARTMENT_REQUEST,
  payload,
});

export const EditDepartmentSuccess = (payload: any) => ({
  type: ActionDepartment.EDIT_DEPARTMENT_SUCCESS,
  payload,
});

export const EditDepartmentFailed = (payload: any) => ({
  type: ActionDepartment.EDIT_DEPARTMENT_FAILED,
  payload,
});

//

export const DelDepartmentRequest = (payload: any) => ({
  type: ActionDepartment.DEL_DEPARTMENT_REQUEST,
  payload,
});

export const DelDepartmentSuccess = (payload: any) => ({
  type: ActionDepartment.DEL_DEPARTMENT_SUCCESS,
  payload,
});

export const DelDepartmentFailed = (payload: any) => ({
  type: ActionDepartment.DEL_DEPARTMENT_FAILED,
  payload,
});

//

export const FindDepartmentRequest = (payload: any) => ({
  type: ActionDepartment.FIND_DEPARTMENT_REQUEST,
  payload,
});

export const FindDepartmentSuccess = (payload: any) => ({
  type: ActionDepartment.FIND_DEPARTMENT_SUCCESS,
  payload,
});

export const FindDepartmentFailed = (payload: any) => ({
  type: ActionDepartment.FIND_DEPARTMENT_FAILED,
  payload,
});


