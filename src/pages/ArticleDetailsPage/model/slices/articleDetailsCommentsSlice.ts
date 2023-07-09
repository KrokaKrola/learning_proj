import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;

export { getArticleComments };
