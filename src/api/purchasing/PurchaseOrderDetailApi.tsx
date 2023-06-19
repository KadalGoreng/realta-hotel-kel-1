import axios from "axios";
import config from "@/config/config";

const Create = async (payload: any) => {
  const { ...createPurchaseOrderDetailDto } = payload;
  try {
    const result = await axios.post(`${config.domain}/purchaseOrderDetail/`, createPurchaseOrderDetailDto);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  const { id, podeId, ...updatePurchaseOrderDetailDto } = payload;
  try {
    const result = await axios.put(`${config.domain}/purchaseOrderDetail/${id}/${podeId}`, updatePurchaseOrderDetailDto);
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
