import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface AuthState {
  token?: string | null;
  refToken?: string | null;
  userInfo: unknown;
}

const initialState: AuthState = {
  token: null,
  refToken: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<AuthState>>) => {
      state.token = action.payload.token;
      state.refToken = action.payload.refToken;
      state.userInfo = action.payload.userInfo;
    },
    clearToken: (state) => {
      state.token = null;
      state.refToken = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, clearToken } = authSlice.actions;

export default authSlice.reducer;
