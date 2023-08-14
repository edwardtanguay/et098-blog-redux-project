import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { IBlogState } from "../reducer/blogSlice";
import userReducer, { IUsersState } from "../reducer/userSlice";

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

export default store;
