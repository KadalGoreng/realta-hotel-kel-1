import axios from "axios";
import config from "@/config/config";

const GetData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/facilities/hotel/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/facilities/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/facilities/${payload.id}`, payload);
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

export default {
  GetData,
  Create,
  Update,
  findOne,
  deleted,
};
