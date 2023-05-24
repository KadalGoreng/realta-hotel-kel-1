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

const Upload = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/facilityPhoto/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};

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

export default {
  list,
  Delete,
  Upload,
  Update,
};
