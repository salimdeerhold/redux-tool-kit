import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slice/user_slice';

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
