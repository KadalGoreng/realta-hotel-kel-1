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

const getHotelById = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/facilities/hotel/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getReviewByHotel = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/hotelReviews?hotelId=${id}`
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

const getCategoryFacility = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/categoryGroup`
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

const getAddOnItem = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/price-items`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createOrder = async (data: any) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/order/`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createOrderDetail = async (data: any) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/order-detail/`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createBoex = async (data: any) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/order-detail-extra/`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getBookingOrder = async () => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/order`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getBookingOrderByUser = async (id: number) => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/order/${id}`
    );
    return result;
  } catch (error) {
    return error;
  }
};

const createTransaction = async (data: any) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/payment/transaction`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  getHotel,
  getCoupon,
  createBoex,
  createOrder,
  getFacility,
  getHotelById,
  getReviewByHotel,
  getAddOnItem,
  getBookingOrder,
  createOrderDetail,
  createTransaction,
  getCategoryFacility,
  getBookingOrderByUser,
};
