import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../interface";
import { getAllUsers } from "../services";

export interface IUsersState {
  users: IUser[];
  userId: string;
}
export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();
  return response.data;
});

const initialState: IUsersState = {
  users: [],
  userId: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectUserById = (state: RootState, userId: string) =>
  state.users.users.find((user: IUser) => user.id === userId);

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
