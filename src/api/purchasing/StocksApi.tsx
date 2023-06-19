import axios from "axios";
import config from "@/config/config";

const GetData = async (payload: any) => {
  const { stockName, page } = payload;
  try {
    const result = await axios.get(`${config.domain}/stocks?stockName=${stockName}&page=${page}`);
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
  const { id, ...updateStocksDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/stocks/${id}`, updateStocksDto);
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

// const FindData = async (payload: any) => {
//   const { id, page } = payload;
//   try {
//     const result = await axios.get(`${config.domain}/stocks/${id}?page=${page}`);
//     return result.data;
//   } catch (error) {
//     return await error;
//   }
// };

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
