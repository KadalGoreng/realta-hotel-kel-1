import axios from "axios";

const getHotel = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/hotels`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getFacility = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/facilities`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getCoupon = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/special-offer`
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default { getHotel, getFacility, getCoupon };
