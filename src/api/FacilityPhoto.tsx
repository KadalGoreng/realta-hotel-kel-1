import axios from "axios";
import config from "@/config/config";

const list = async (id: number) => {
  try {
    const result = await axios.get(`${config.domain}/facilityPhoto/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const findMany = async (id: number) => {
  try {
    const result = await axios.get(`${config.domain}/facilityPhoto/many/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

// Use DTO

// const Upload = async (payload: any) => {
//   const {...uploadFacilityPhotoDto} = payload
//   try {
//     const result = await axios.post(`${config.domain}/facilityPhoto/`, uploadFacilityPhotoDto);
//     return result;
//   } catch (error) {
//     return await error;
//   }
// };

const Upload = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/facilityPhoto/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

// Use DTO

// const Update = async (payload: any) => {
//   const { id, ...updateFacilityPhotoDto } = payload;
//   try {
//     const result = await axios.put(`${config.domain}/facilityPhoto/${id}`, updateFacilityPhotoDto);
//     return result;
//   } catch (error) {
//     return await error;
//   }
// };

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/facilityPhoto/${payload.faphoId}`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

const Delete = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/facilityPhoto/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const facilityPhotoApi = {
  list,
  findMany,
  Delete,
  Upload,
  Update,
};

export default facilityPhotoApi;
