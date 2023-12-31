import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectBlogById, updateApiBlog } from "../reducer/blogSlice";
import { AppDispatch, RootState } from "../store";
import { useState } from "react";
import { selectAllUsers } from "../reducer/userSlice";

const UpdateArticlePage = () => {
  const navigate = useNavigate();
  const blogId = useSelector((state: RootState) => state.blogs.blogId);
  const article = useSelector((state: RootState) =>
    selectBlogById(state, blogId)
  );
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    title: article?.title,
    image: article?.imgUrl,
    content: article?.content,
    user: article?.userId,
  });

  const onFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const backToHomePage = () => {
    navigate("/");
  };
  const canSave = [
    formData.title,
    formData.content,
    formData.image,
    formData.user,
  ].every(Boolean);

  const handleSubmitForm = () => {
    if (article && canSave) {
      dispatch(
        updateApiBlog({
          id: blogId,
          date: article?.date ,
          title: formData.title || "",
          imgUrl: formData.image || "",
          content: formData.content || "",
          userId: formData.user || "",
          reactions: {
            thumbSup: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
        })
      );
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
              name="title"
              value={formData.title}
              onChange={onFormChange}
            />
            <input
              className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
              type="text"
              placeholder="Path"
              name="image"
              value={formData.image}
              onChange={onFormChange}
            />
            <select
              className="w-full rounded-lg py-2 outline-0 px-3  text-BACKGROUND"
              name="user"
              id=""
              value={formData.user}
              onChange={onFormChange}
            >
              <option className=" bg-slate-600">Authors</option>
              {users.map((user) => (
                <option
                  className="odd:bg-slate-400 even:bg-slate-700"
                  value={user.id}
                  key={user.id}
                >
                  {user.fullName}
                </option>
              ))}
            </select>
            <textarea
              className="w-full rounded-lg outline-0 px-3 py-2 text-BACKGROUND"
              name="content"
              id=""
              cols={30}
              rows={10}
              placeholder="Content"
              value={formData.content}
              onChange={onFormChange}
            ></textarea>
            <div className="flex px-8 py-2 gap-8">
              <button
                disabled={!canSave}
                className="bg-CYAN px-8 py-2 rounded-lg"
                onClick={handleSubmitForm}
              >
                Update Article
              </button>
              <button
                className="bg-ORANGE px-8 py-2 rounded-lg"
                onClick={backToHomePage}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );

};

export default UpdateArticlePage;
