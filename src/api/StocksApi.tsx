import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/stocks/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/stocks/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/stocks/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/stocks/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/stocks/${id}`);
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
