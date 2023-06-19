import axios from "axios";
import config from "@/config/config";

const GetData = async (payload: any) => {
  const { vendorName, status, page } = payload;
  try {
    const result = await axios.get(`${config.domain}/vendor?vendorName=${vendorName}&status=${status}&page=${page}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/vendor/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const { id, ...updateVendorDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/vendor/${id}`, updateVendorDto);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/vendor/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/vendor/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  GetData,
  Create,
  Update,
  FindData,
  Deleted,
};
