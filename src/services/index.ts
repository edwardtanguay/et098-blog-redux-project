import axios from "axios";
import { IArticle } from "../interface";
import { blogs as _articles } from '../data/db.json';

interface IArticleData {
  data: IArticle[]
}

const SERVER_URL = "http://localhost:9001";

export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get(url);
};

export const getUser = (userId: string) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.get(url);
};

export const getAllBlogs = (): Promise<IArticleData> => {
  // const url = `${SERVER_URL}/blogs`;
  // return axios.get(url);
  return new Promise((resolve) => {
    resolve({ data: _articles });
  });
};

export const getBlog = (blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.get(url);
};

export const createBlog = (blog: IArticle) => {
  const url = `${SERVER_URL}/blogs`;
  return axios.post(url, blog);
};

export const updateBlog = (blog: IArticle, blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.put(url, blog);
};

export const deleteBlog = (blogId: string) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.delete(url);
};
