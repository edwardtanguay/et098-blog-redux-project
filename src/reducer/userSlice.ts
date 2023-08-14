import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IUsers {
  id: string;
  fullName: string;
}

export interface IUsersState {
  users: IUsers[];
}

const initialState: IUsersState = {
  users: [
    {
      id: "1",
      fullName: "Adel Namazi",
    },
    {
      id: "2",
      fullName: "Maryam Karimpour",
    },
    {
      id: "3",
      fullName: "Arvin Namazi",
    },
    {
      id: "4",
      fullName: "Arash Namazi",
    },
    {
      id: "5",
      fullName: "Pouria Namazi",
    },
    {
      id: "6",
      fullName: "Soudabeh Namazi",
    },
  ],
};

export const getAllUsers = (state: RootState) => state.users.users;
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
