export { userReducer } from './model/slice/userSlice';
export { userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
