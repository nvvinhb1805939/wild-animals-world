import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import animalsApi from '../../api/animalsApi';

export const fetchAnimals = createAsyncThunk('animals/getAll', async (data, { rejectWithValue }) => {
  try {
    const response = await animalsApi.getAll();
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchAnimalById = createAsyncThunk('animals/get', async (animalId, { rejectWithValue }) => {
  try {
    const response = await animalsApi.get(animalId);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  animals: [],
  error: '',
};

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAnimals.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAnimals.fulfilled, (state, action) => {
        state.loading = false;
        state.animals = action.payload;
        state.error = '';
      })
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchAnimalById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAnimalById.fulfilled, (state, action) => {
        state.loading = false;
        state.animals = action.payload;
        state.error = '';
      })
      .addCase(fetchAnimalById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default animalsSlice.reducer;
