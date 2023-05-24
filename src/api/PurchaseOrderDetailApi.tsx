import axios from "axios";
import config from "@/config/config";

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/purchaseOrderDetail/`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`${config.domain}/purchaseOrderDetail/${payload.id}/${payload.podeId}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Deleted = async (id: any, podeId: any) => {
  try {
    const result = await axios.delete(`${config.domain}/purchaseOrderDetail/${id}/${podeId}`);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  Create,
  Update,
  Deleted,
};
