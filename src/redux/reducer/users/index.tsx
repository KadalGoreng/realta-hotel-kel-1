import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import UsersReducer from './usersReducer';
import UserRolesReducer from './user-rolesReducer';
import UserProfilesReducer from './user-profilesReducer';
import UserPasswordReducer from './user-passwordReducer';
import UserMembersReducer from './user-membersReducer';
import UserBonusPointsReducer from './user-bonus-pointsReducer';
import RolesReducer from './rolesReducer';

const rootReducer = combineReducers({
    userState: UserReducer,
    usersState: UsersReducer,
    UserRolesState: UserRolesReducer,
    userprofilesState: UserProfilesReducer,
    userPasswordState: UserPasswordReducer,
    usermembersState: UserMembersReducer,
    userbonuspointsState: UserBonusPointsReducer,
    rolesState: RolesReducer,
})

export default rootReducer