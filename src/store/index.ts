import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { IBlogState, fetchBlogs } from "../reducer/blogSlice";
import userReducer, { IUsersState, fetchUsers } from "../reducer/userSlice";

export type RootState = {
  blogs: IBlogState;
  users: IUsersState;
};

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer,
  },
});

store.dispatch(fetchUsers());
store.dispatch(fetchBlogs());

export type AppDispatch = typeof store.dispatch;

export default store;
