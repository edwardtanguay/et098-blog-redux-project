import { useSelector } from "react-redux";
import { getAllArticles } from "../../reducer/AppSlice";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import SearchBox from "../SearchBox";

const Blogs = () => {
  const filter=useSelector((state:RootState)=>state.blogs.filter)
  const articles = useSelector((state:RootState)=>getAllArticles(state));


  return (
    <div className="flex flex-col gap-8 container px-5 py-10">
     <div className="flex justify-center">
     <SearchBox />
     </div>
      {
      articles.filter((article)=>article.title.toLowerCase().includes(filter.toLowerCase()))
      .map((article) => (
        <article
          className="flex flex-col bg-PURPLE rounded-xl py-4 px-8"
          key={article.id}
        >
          <div className="flex items-center gap-2">
            <img className="w-12" src={article.imgUrl} alt="" />
            <h3 className="font-bold text-2xl text-ORANGE">{article.title}</h3>
          </div>
          <p className="my-4">{article.content.substring(0, 200)}...</p>
          <NavLink className='uppercase font-bold bg-CURRENT_LINE w-24 py-2 text-center rounded-lg text-FOREGROUND' to={`/blog/${article.id}`}>See MORE</NavLink>
        </article>
      ))}
    </div>
  );
};

export default Blogs;