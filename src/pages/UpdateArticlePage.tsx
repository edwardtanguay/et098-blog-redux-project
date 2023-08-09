import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articleUpdated, getBlogById } from "../reducer/AppSlice";
import { RootState } from "../store";
import { useState } from "react";

const UpdateArticlePage = () => {
  const navigate = useNavigate();
  const blogId = useSelector((state: RootState) => state.blogs.blogId);
  const article = useSelector((state: RootState) => getBlogById(state, blogId));

  const dispatch = useDispatch();

  const [title, setTitle] = useState(article?.title);
  const [image, setImage] = useState(article?.imgUrl);
  const [content, setContent] = useState(article?.content);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const onContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const backToHomePage = () => {
    navigate("/");
  };

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(articleUpdated({ id: blogId, title, imgUrl:image, content }));
      navigate(`/blog/${blogId}`);
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="container px-5 flex justify-center">
        <div className="flex flex-col gap-4 items-center bg-CURRENT_LINE w-full lg:w-1/2 px-8 py-5 rounded-lg">
          <input
            className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onTitleChange}
          />
          <input
            className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
            type="text"
            placeholder="Path"
            value={image}
            onChange={onImageChange}
          />
          <textarea
            className="w-full rounded-lg outline-0 px-3 py-2 text-BACKGROUND"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Content"
            value={content}
            onChange={onContentChange}
          ></textarea>
          <div className="flex px-8 py-2 gap-8">
            <button className="bg-CYAN px-8 py-2 rounded-lg" onClick={handleSubmitForm}>
              Update Article
            </button>
            <button
              className="bg-ORANGE px-8 py-2 rounded-lg"
              onClick={backToHomePage}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateArticlePage;
