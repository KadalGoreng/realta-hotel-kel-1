import axios from "axios";
import config from "@/config/config";
import { getCookie } from "cookies-next";

const signup = async (params: any) => {
    try {
        const result = await axios.post(`${config.domain}/user/signup`, params);
        return result;
    } catch (error) {
        return error;
    }
}

const signin = async (params: any) => {
    try {
        const result = await axios.post(`${config.domain}/user/auth/login`, params);
        return result;
    } catch (error) {
        return error;
    }
}

const profile = async () => {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${getCookie('access_token')}` }
    try {
        const result = await axios.get(`${config.domain}/user/profile`);
        return result;
    } catch (error) {
        return error;
    }
}

export default {
    signin,
    signup,
    profile
}
   