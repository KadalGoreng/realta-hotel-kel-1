import axios from "axios";
import config from "@/config/config";

const GetAllData = async (action: any) => {
  try {
    const result = await axios.get(`${config.domain}/hotels/all?page=${action.page}&name=${action.name}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

// const GetData = async () => {
//   try {
//     const result = await axios.get(`${config.domain}/hotels/`);
//     return result.data;
//   } catch (error) {
//     return error;
//   }
// };

// const Create = async (payload: any) => {
//   try {
//     const { ...createHotelsDto } = payload;
//     const result = await axios.post(`${config.domain}/hotels/`, createHotelsDto);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

const Update = async (data: any) => {
  try {
    const { id, ...updateHotelsDto } = data;
    const result = await axios.put(`${config.domain}/hotels/${id}`, updateHotelsDto);
    return result;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/hotels/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

// const Update = async (data: any) => {
//   try {
//     const result = await axios.put(`${config.domain}/hotels/${data.id}`, data);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/hotels/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/hotels/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const hotelsApi = {
  GetAllData,
  Create,
  Update,
  findOne,
  deleted,
};

export default hotelsApi;
