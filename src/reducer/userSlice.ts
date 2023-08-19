import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../interface/interface";
import { getAllUsers } from "../services";

interface IUsersState extends Array<IUser> {}

export const fetchUsers=createAsyncThunk("/users/fetchUsers",async()=>{
  const response=await getAllUsers();
  return response.data;
})

const userSlice = createSlice({
  name: "users",
  initialState:[] as IUsersState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.fulfilled,(_state,action)=>{
      return action.payload
    })
  }
});

export const selectAllUsers=(state:RootState)=>state.users;
export const selectUserById=(state:RootState,userId:string)=>state.users.find((user:IUser)=>user.id===userId)

export default userSlice.reducer;
