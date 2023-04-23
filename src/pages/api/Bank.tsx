import axios from "axios";
import config from "@/pages/config/config";

const create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/payment/bank/`, payload);
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/payment/bank/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const findOne = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/payment/bank/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const update = async (data: any) => {
  // const id = parseInt(data.get("id"));
  try {
    const result = await axios.put(
      `${config.domain}/payment/bank/${data.id}`,
      data
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/payment/bank/${id}`);
    return result;
  } catch (error) {
    return await error;
  }
};
const search = async (name: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/bank/search/${name}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { create, read, findOne, update, deleted, search };
