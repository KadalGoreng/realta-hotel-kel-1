import axios from "axios";
import config from "@/pages/config/config";

const create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${config.domain}/payment/useraccount/`,
      payload
    );
    return result;
  } catch (error) {
    return await error;
  }
};
const read = async () => {
  try {
    const result = await axios.get(`${config.domain}/payment/useraccount/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
const readOne = async (id: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/useraccount/user/${id}`
    );
    return result.data;
  } catch (error) {
    return await error;
  }
};
const findOne = async (id: any) => {
  try {
    const result = await axios.get(
      `${config.domain}/payment/useraccount/${id}`
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
      `${config.domain}/payment/useraccount/${data.usac_entity_id}/${data.usac_user_id}/${data.usac_acc_number}`,
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
      `${config.domain}/payment/useraccount/${id}`
    );
    return result;
  } catch (error) {
    return await error;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, read, readOne, findOne, update, deleted };
