import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
