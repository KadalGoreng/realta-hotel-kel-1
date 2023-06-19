import axios from "axios";
import config from "@/config/config";

const GetData = async (name: string, price: string) => {
  try {
    const result = await axios.get(`${config.domain}/vendorProduct?name=${name}&price=${price}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/vendorProduct/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const { id, ...updateVendorProductDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/vendorProduct/${id}`, updateVendorProductDto);
    return result;
  } catch (error) {
    return error;
  }
};

const FindData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/vendorProduct/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const FindDataByVendorId = async (id: any, page: any) => {
  try {
    const result = await axios.get(`${config.domain}/vendorProduct/vendor/${id}?page=${page}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/vendorProduct/${id}`);
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
  FindDataByVendorId,
  Deleted,
};
