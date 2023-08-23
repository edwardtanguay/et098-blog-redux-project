import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {AppDispatch, RootState} from "../../store";
import SearchBox from "../SearchBox";
import ShowTime from "../ShowTime";
import ShowAuthor from "../ShowAuthor";
import ReactionButtons from "../ReactionButtons";
import {fetchBlogs, selectAllBlogs} from "../../reducer/blogSlice";
import {useEffect} from "react";
import Spinner from "../Spinner";


const BlogStatus = {
    Idle: "idle",
    Loading: "loading",
    Completed: "completed",
    Failed: "failed",
};

const Blogs = () => {

    const dispatch = useDispatch<AppDispatch>();

    const blogStatus = useSelector((state: RootState) => state.blogs.status);
    const error = useSelector((state: RootState) => state.blogs.error);
    const filter = useSelector((state: RootState) => state.blogs.filter);

    const sortedArticles = useSelector(selectAllBlogs)
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    useEffect(() => {
        if (blogStatus === "idle") {
            dispatch(fetchBlogs());
        }
    }, [blogStatus, dispatch]);

    const renderContent = () => {
        switch (blogStatus) {
            case BlogStatus.Loading:
                return <Spinner/>;
            case BlogStatus.Completed:
                return sortedArticles
                    .filter((article) =>
                        article.title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((article) => (
                        <article
                            className="flex flex-col bg-PURPLE rounded-xl py-4 px-8"
                            key={article.id}
                        >
                            <div className="flex items-center gap-2">
                                <img className="w-12" src={article.imgUrl} alt=""/>
                                <h3 className="font-bold text-2xl text-ORANGE">
                                    {article.title}
                                </h3>
                            </div>
                            <div className="text-COMMENT my-1 flex">
                                <ShowAuthor userId={article.userId}/>
                                <ShowTime timestamp={article.date}/>
                            </div>
                            <p className="my-4">{article.content.substring(0, 200)}...</p>
                            <div>
                                <ReactionButtons article={article}/>
                            </div>
                            <NavLink
                                className="uppercase font-bold bg-CURRENT_LINE w-28 py-2 text-center rounded-lg text-FOREGROUND"
                                to={`/blog/${article.id}`}
                            >
                                Reed More
                            </NavLink>
                        </article>
                    ));
            case BlogStatus.Failed:
                return <div>{error}</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-8 container px-5 py-10">
            <div className="flex justify-center">
                <SearchBox/>
            </div>
            {renderContent()}
        </div>
    );
};

export default Blogs;
