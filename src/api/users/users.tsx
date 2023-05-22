import axios from 'axios'
import config from '@/config/config'

const GetData = async () => {
    try {
        const result = await axios.get(`${config.domain}/users/`)
        return result.data
    } catch (error) {
        return error
    }
}

const Create = async (payload: any) => {
    try {
        const result = await axios.post(`${config.domain}/users/`, payload)
        return result
    } catch (error) {
        return error
    }
}

const Update = async (payload: any) => {
    try {
        const result = await axios.put(`${config.domain}/users/${payload.userId}` , payload)
        return result
    } catch (error) {
        return error
    }
}

const Deleted = async (id: any) => {
    try {
      const result = await axios.delete(`${config.domain}/users/${id}`);
      return result;
    } catch (error) {
      return await error;
    }
  }

const findOne = async (id: any) => {
    try {
        const result = await axios.get(`${config.domain}/users/${id}` )
        return result.data
    } catch (error) {
        return error
    }
}

export default {
    GetData,
    Create,
    Update,
    Deleted,
    findOne,
}