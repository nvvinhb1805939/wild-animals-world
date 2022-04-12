import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const response = await userApi.login(data);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  data: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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

export default userSlice.reducer;
