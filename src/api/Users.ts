import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/${payload.userId}`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/${id}`
    );
    return result;
  } catch (error) {
    return await error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/users/${id}`
    );
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Update,
  Deleted,
  findOne,
};
