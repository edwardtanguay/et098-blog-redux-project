import { useDispatch, useSelector } from "react-redux";
import { articleDeleted, getBlogById } from "../../reducer/AppSlice";
import { RootState } from "../../store";
import { useNavigate, NavLink } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogId = useSelector((state: RootState) => state.blogs.blogId);
  const article = useSelector((state: RootState) => getBlogById(state, blogId));

  const backToHomePage = () => {
    navigate("/");
  };
  const handleDeleteButton = () => {
    dispatch(articleDeleted({ id: blogId }));
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-8 container px-5 py-10" key={article?.id}>
      <article className="flex flex-col bg-PURPLE rounded-xl py-4 px-8">
        <div className="flex items-center gap-2">
          <img className="w-12" src={article?.imgUrl} alt="" />
          <h3 className="font-bold text-2xl text-ORANGE">{article?.title}</h3>
        </div>
        <p className="my-4">{article?.content}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-8 py-2 bg-RED rounded-lg"
            onClick={handleDeleteButton}
          >
            Delete
          </button>
          <NavLink to={`/update-article/${blogId}`} className="px-8 py-2 bg-ORANGE rounded-lg">Update</NavLink>
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
};

export default Blog;
