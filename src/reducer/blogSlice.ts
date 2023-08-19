import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IArticle } from "../interface";
import { getAllBlogs } from "../services";

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
    articleAdded: (state, action) => {
      const { title, imgUrl, content, userId } = action.payload;
      state.blogs.push({
        id: nanoid(),
        userId,
        date: new Date().toISOString(),
        title,
        imgUrl,
        content,
        reactions: {
          thumbSup: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
      });
    },
    articleUpdated: (state, action) => {
      const { id, title, imgUrl, content, userId } = action.payload;
      const existingArticle = state.blogs.find(
        (article) => article.id === id
      );
      if (existingArticle) {
        existingArticle.title = title;
        existingArticle.imgUrl = imgUrl;
        existingArticle.content = content;
        existingArticle.userId = userId;
      }
    },
    articleDeleted: (state, action) => {
      const { id } = action.payload;
      state.blogs = state.blogs.filter((article) => article.id !== id);
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
  articleDeleted,
  articleAdded,
  articleUpdated,
  reactionAdded,
} = blogSlice.actions;
export default blogSlice.reducer;
