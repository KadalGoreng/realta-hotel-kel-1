import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/hotels/`);
    return result.data;
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

const Update = async (data: any) => {
  try {
    const result = await axios.put(`${config.domain}/hotels/${data.id}`, data);
    return result;
  } catch (error) {
    return error;
  }
};

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

export default {
  GetData,
  Create,
  Update,
  findOne,
  deleted,
};
