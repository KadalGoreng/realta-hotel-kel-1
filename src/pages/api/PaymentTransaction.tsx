import axios from "axios";
import config from "@/pages/config/config";

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/payment/transaction/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/payment/transaction/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const findOne = async (id: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/transaction/${id}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};
const update = async (data: any) => {
  // const id = parseInt(data.get("id"));
  try {
    const result = await axios.put(
      `${config.domain}/payment/transaction/${data.id}`,
      data
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete(
      `${config.domain}/payment/transaction/${id}`
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const search = async (name: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/transaction/search/${name}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

const filter = async (name: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/transaction/filter/${name}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, read, findOne, update, deleted, search, filter };
