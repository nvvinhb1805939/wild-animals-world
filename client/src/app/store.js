import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from '../features/Animals/animalsSlice';
import userReducer from '../features/Auth/userSlice';

const rootReducer = {
  animals: animalsReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
