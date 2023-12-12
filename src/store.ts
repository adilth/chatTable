import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  name: string;
  email: string;
  username?: string;
  website?: string;
}

interface AppState {
  selectedPost: Post | null;
}

const initialState: AppState = {
  selectedPost: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
