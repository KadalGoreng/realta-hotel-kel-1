import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/stockDetail/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/stockDetail/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const { id, stodId, ...updateStockDetailDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/stockDetail/${id}/${stodId}`, updateStockDetailDto);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/stockDetail/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const FindDataByStock = async (id: any, page: any) => {
  try {
    const result = await axios.get(`${config.domain}/stockDetail/stock/${id}?page=${page}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any, stodId: any) => {
  try {
    const result = await axios.delete(`${config.domain}/stockDetail/${id}/${stodId}`);
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
  FindDataByStock,
};
