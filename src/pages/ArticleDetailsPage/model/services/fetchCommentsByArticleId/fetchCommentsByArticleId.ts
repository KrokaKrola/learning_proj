import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig
>(
  'articleDetails/fetchCommentsByArticleId',
  async (id, { rejectWithValue, extra }) => {
    try {
      if (!id) {
        return rejectWithValue('error');
      }

      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId: id,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
