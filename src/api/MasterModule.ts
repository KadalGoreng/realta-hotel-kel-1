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

const createRegions = async (payload: string) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/regions`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteRegions = async (id: number) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/regions/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateRegions = async (payload: any) => {
  const { id, ...data } = payload;
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/regions/${id}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getCountry = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/country/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createCountries = async (payload: string) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/country`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteCountries = async (id: number) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/country/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateCountries = async (payload: any) => {
  const { id, ...data } = payload;
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/country/${id}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getProvinces = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/provinces/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createProvinces = async (payload: string) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/provinces`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteProvinces = async (id: number) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/provinces/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateProvinces = async (payload: any) => {
  const { id, ...data } = payload;
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/provinces/${id}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getAddress = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/address/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createAddress = async (payload: string) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/address`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteAddress = async (id: number) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/address/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateAddress = async (payload: any) => {
  const { id, ...data } = payload;
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/address/${id}`,
      data
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
  getCountry,
  getAddress,
  getProvinces,
  createRegions,
  updateRegions,
  deleteRegions,
  createAddress,
  updateAddress,
  deleteAddress,
  createProvinces,
  updateProvinces,
  deleteProvinces,
  updateCountries,
  createCountries,
  deleteCountries,
  policyByCategories,
};
