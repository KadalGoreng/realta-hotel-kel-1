import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/stockPhoto/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/stockPhoto/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/stockPhoto/${payload.sphoId}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/stockPhoto/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/stockPhoto/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

const Upload = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/stockPhoto/upload`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Update,
  FindData,
  Deleted,
  Upload,
};
