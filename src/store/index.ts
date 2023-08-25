import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { fetchBlogs } from "../reducer/blogSlice";
import userReducer, { fetchUsers } from "../reducer/userSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer,
  },
});

store.dispatch(fetchUsers());
store.dispatch(fetchBlogs());

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
