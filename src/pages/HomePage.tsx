import { useParams } from "react-router-dom";
import Blogs from "../components/blog/Blogs";
import Blog from "../components/blog/Blog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBlogId } from "../reducer/AppSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(setBlogId(blogId));
  }, [blogId, dispatch]);

  return <div>{blogId === undefined ? <Blogs /> : <Blog />}</div>;
};

export default HomePage;
