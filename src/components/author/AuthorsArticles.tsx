import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectAllBlogs } from "../../reducer/blogSlice";
import { NavLink } from "react-router-dom";
import { selectUserById } from "../../reducer/userSlice";

const AuthorsArticles = () => {
  const userId = useSelector((state: RootState) => state.users.userId);
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const userBlogs = useSelector(selectAllBlogs)
    .filter((blog) => blog.userId === userId)
    .map((blog) => (
      <NavLink className="w-full" to={`/blog/${blog.id}`} key={blog.id}>
        <li className="authors-list">{blog.title}</li>
      </NavLink>
    ));
  return (
    <section className="mt-8 flex flex-col justify-center items-center gap-8 container px-5">
      <h2 className="text-5xl font-Viga">{user?.fullName}</h2>
      <ul className="w-full flex flex-col gap-4 bg-PURPLE py-8 rounded-lg odd:bg-RED">
        {userBlogs}
      </ul>
    </section>
  );
};

export default AuthorsArticles;
