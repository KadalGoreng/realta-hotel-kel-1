import axios from "axios";
import config from "@/pages/config/config";

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/payment/gateway/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/payment/gateway/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/payment/gateway/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const update = async (data: any) => {
  // const id = parseInt(data.get("id"));
  try {
    const result = await axios.put(
      `${config.domain}/payment/gateway/${data.id}`,
      data
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/payment/gateway/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, read, findOne, update, deleted };
