import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

interface IAuth {
  token: string | null;
  user: object | null;
}

const initialState: IAuth = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ accessToken: string; user: object }>
    ) => {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: action.payload.accessToken,
          user: action.payload.user,
        })
      );
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      message.success('Successfully logged out');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
