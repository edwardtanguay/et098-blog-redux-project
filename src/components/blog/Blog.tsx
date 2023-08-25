import { useDispatch, useSelector } from "react-redux";
import {  deleteApiBlog, selectBlogById } from "../../reducer/blogSlice";
import { AppDispatch, RootState } from "../../store";
import { useNavigate, NavLink } from "react-router-dom";
import ReactionButtons from "../ReactionButtons";

import ShowAuthor from "../ShowAuthor";
import ShowTime from "../ShowTime";
import NotFoundPage from "../../pages/NotFoundPage.tsx";


const Blog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const blogId = useSelector((state: RootState) => state.blogs.blogId);
  const article = useSelector((state: RootState) => selectBlogById(state, blogId));

  const backToHomePage = () => {
   navigate('/')
  };
  const handleDeleteButton = () => {
    dispatch(deleteApiBlog(blogId));
    navigate("/");
  };
  if (article) {
          return (
      <div
        className="flex flex-col gap-8 container px-5 py-10"
        key={article?.id}
      >
        <article className="flex flex-col bg-PURPLE rounded-xl py-4 px-8">
          <div className="flex items-center gap-2">
            <img className="w-12" src={article?.imgUrl} alt="" />
            <h3 className="font-bold text-2xl text-ORANGE">{article?.title}</h3>
          </div>
          <div className="flex px-5 text-COMMENT">
            <ShowAuthor userId={article.userId} />
            <ShowTime timestamp={article.date} />
          </div>
          <p className="my-4">{article?.content}</p>
          <div>
            <ReactionButtons article={article} />
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-2 bg-RED rounded-lg"
              onClick={handleDeleteButton}
            >
              Delete
            </button>
            <NavLink
              to={`/update-article/${blogId}`}
              className="px-8 py-2 bg-ORANGE rounded-lg"
            >
              Update
            </NavLink>
            <button
              className="px-8 py-2 bg-GREEN rounded-lg"
              onClick={backToHomePage}
            >
              Back
            </button>
          </div>
        </article>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default Blog;
