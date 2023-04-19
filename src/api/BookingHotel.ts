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

export default { getHotel };
