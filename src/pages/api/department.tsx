import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/department");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/department/", payload);
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      "http://localhost:3002/department/" + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:3002/department/" + id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:3002/department/" + id);
    return result;
  } catch (error) {
    return await error;
  }
};





export default {
  GetData,
  Create,
  Update,
  findData,
  deleted,

};
