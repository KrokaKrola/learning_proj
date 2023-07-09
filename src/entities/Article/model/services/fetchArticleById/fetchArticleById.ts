import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
  'article/fetchArticleById',
  async (id, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${id}`);

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue('error');
    }
  }
);
