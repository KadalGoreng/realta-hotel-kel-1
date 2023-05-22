import * as AcitonType from '../../constant/users/userConstant';
import { getCookie } from 'cookies-next';

const getFromCookies = (key: any) => {
    if (!key || typeof window === 'undefined') {
        return ''
    }
    return getCookie(key)
}

const INIT_STATE = {
    UserProfile: getFromCookies('profile') ? JSON.parse(getCookie('profile')) : null,
    UserSignup: null,
    message: ''
}

const UserReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case AcitonType.USER_SIGNIN_REQUEST:
            return state
        case AcitonType.USER_SIGNIN_SUCCESS:
            return GetSigninSuccess(state, action)
        case AcitonType.USER_SIGNUP_REQUEST:
            return state
        case AcitonType.USER_SIGNUP_SUCCESS:
            return AddSignupSuccess(state, action)
        case AcitonType.USER_SIGNOUT_REQUEST:
            return state
        case AcitonType.USER_SIGNOUT_SUCCESS:
            return PushSignoutSuccess(state, action)
        case AcitonType.MESSAGE_NOTIFICATION:
            return ShowMessage(state, action)
        default:
            return state
    }
}

const GetSigninSuccess = (state: any, action: any) => {
    return {
        ...state,
        UserProfile: action.payload,
        message: ''
    }
}

const PushSignoutSuccess = (state: any, action: any) => {
    return {
        ...state,
        UserProfile: null,
        UserSignup: null,
        message: '',
    }
}

const AddSignupSuccess = (state: any, action: any) => {

    return {
        ...state,
        UserSignup: action.payload,
    }
}

const ShowMessage = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        message: payload.message
    }
}

export default UserReducer