import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/vendorProduct/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/vendorProduct/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/vendorProduct/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/vendorProduct/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/vendorProduct/${id}`);
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
