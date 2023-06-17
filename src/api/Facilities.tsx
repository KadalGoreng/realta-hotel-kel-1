import axios from "axios";
import config from "@/config/config";

const GetAllData = async (action: any) => {
  try {
    const result = await axios.get(`${config.domain}/facilities/?page=${action.page}&id=${action.id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

// const GetAllData = async () => {
//   try {
//     const result = await axios.get(`${config.domain}/facilities/`);
//     return result.data;
//   } catch (error) {
//     return await error;
//   }
// };

const GetData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/facilities/hotel/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  const { ...createFacilitiesDto } = payload;
  try {
    const result = await axios.post(`${config.domain}/facilities/`, createFacilitiesDto);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const { id, ...updateFacilitiesDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/facilities/${id}`, updateFacilitiesDto);
    return result;
  } catch (error) {
    return error;
  }
};

const findOne = async (id: any) => {
  try {
    console.log(id);

    const result = await axios.get(`${config.domain}/facilities/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/facilities/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const facilitiesApi = {
  GetAllData,
  GetData,
  Create,
  Update,
  findOne,
  deleted,
};

export default facilitiesApi;
