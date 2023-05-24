import axios from "axios";
import config from "@/config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/categoryGroup/`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const categoryGroupApi = {
  list,
};

export default categoryGroupApi;
