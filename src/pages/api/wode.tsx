import axios from "axios";

const GetData = async (id : any) => {
  try {
    const result = await axios.get("http://localhost:3002/wode/" + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

const GetEmp = async () => {
  try {
    const result = await axios.get("http://localhost:3002/wode/users");
    return result.data;
  } catch (error) {
    return error;
  }
};


const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/wode/", payload);
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
      "http://localhost:3002/woro/" + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:3002/woro/" + id);
    return result;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:3002/woro/" + id);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  GetData,
  Create,
  GetEmp,
//   Update,
//   findData,
//   deleted,
//   GetUsers,
};
