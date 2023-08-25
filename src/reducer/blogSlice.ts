import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IArticle } from "../interface";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../services";

export interface IBlogState {
  darkMode: boolean;
  blogs: IArticle[];
  blogId: string;
  filter: string;
  status: "idle" | "loading" | "completed" | "failed";
  error: string | null;
}

const initialState: IBlogState = {
  darkMode: false,
  blogId: "",
  filter: "",
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogs = createAsyncThunk("/blogs/fetchBlogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

export const addNewBlog = createAsyncThunk(
  "/blogs/addNewBlog",
  async (initialBlog: IArticle) => {
    const response = await createBlog(initialBlog);
    return response.data;
  }
);

export const updateApiBlog = createAsyncThunk(
  "/blogs/updateApiBlog",
  async (initialBlog: IArticle) => {
    const response = await updateBlog(initialBlog, initialBlog.id);
    return response.data;
  }
);

export const deleteApiBlog = createAsyncThunk(
  "/blogs/deleteApiBlog",
  async (initialBlogId: string) => {
    await deleteBlog(initialBlogId);
    return initialBlogId;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setBlogId: (state, action) => {
      state.blogId = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    reactionAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === blogId);
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "completed";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(updateApiBlog.fulfilled, (state, action) => {
        const { id } = action.payload;
        const updatedBlogIndex = state.blogs.findIndex(
          (blog) => blog.id === id
        );
        state.blogs[updatedBlogIndex] = action.payload;
      })
      .addCase(deleteApiBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });
  },
});

export const selectAllBlogs = (state: RootState) => state.blogs.blogs;

export const selectBlogById = (state: RootState, blogId: string) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

export const {
  toggleTheme,
  setBlogId,
  setFilter,
  reactionAdded,
} = blogSlice.actions;
export default blogSlice.reducer;
