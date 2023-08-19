import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { IBlogState, fetchBlogs } from "../reducer/blogSlice";
import userReducer, { fetchUsers } from "../reducer/userSlice";

export type RootState = {
  blogs: IBlogState;
  users: ReturnType<typeof userReducer>;
};
const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer,
  },
});
store.dispatch(fetchUsers());
store.dispatch(fetchBlogs());
export default store;
