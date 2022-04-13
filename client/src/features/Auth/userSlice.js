import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const response = await userApi.login(data);
    localStorage.setItem('token', JSON.stringify(response));
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  data: JSON.parse(localStorage.getItem('token')) || {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      localStorage.clear();
      state.data = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
