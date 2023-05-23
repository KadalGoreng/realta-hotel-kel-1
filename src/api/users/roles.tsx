import axios from 'axios'
import config from '@/config/config'

const GetData = async () => {
    try {
        const result = await axios.get(`${config.domain}/roles/`)
        return result.data
    } catch (error) {
        return error
    }
}

const Create = async (payload: any) => {
    try {
        const result = await axios.post(`${config.domain}/roles/`, payload)
        return result
    } catch (error) {
        return error
    }
}

const Update = async (payload: any) => {
    try {
        const result = await axios.put(`${config.domain}/roles/${payload.roleId}`, payload)
        return result
    } catch (error) {
        return error
    }
}

const Deleted = async (id: any) => {
    try {
      const result = await axios.delete(`${config.domain}/roles/${id}`);
      return result;
    } catch (error) {
      return await error;
    }
  }

const findOne = async (id: any) => {
    try {
        const result = await axios.get(`${config.domain}/roles/${id}`)
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