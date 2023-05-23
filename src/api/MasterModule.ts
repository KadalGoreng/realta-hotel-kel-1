import axios from "axios";

const getRegions = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/regions`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const policyByCategories = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/policy/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  getRegions,
  policyByCategories,
};
