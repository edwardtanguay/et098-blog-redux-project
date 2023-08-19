import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articleAdded } from "../reducer/blogSlice";
import { selectAllUsers } from "../reducer/userSlice";

const CreateArticlePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
    user: "",
  });

  const backToHomePage = () => {
    navigate("/");
  };

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

  const canSave = [
    formData.title,
    formData.content,
    formData.user,
    formData.image,
  ].every(Boolean);

  const addArticleToArray = () => {
    if (canSave) {
      dispatch(
        articleAdded({
          title: formData.title,
          imgUrl: formData.image,
          content: formData.content,
          user: formData.user,
        })
      );
      setFormData({
        title: "",
        content: "",
        user: "",
        image: "",
      });
      navigate("/");
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
            <option>Authors</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
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
              onClick={addArticleToArray}
            >
              Add Article
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

export default CreateArticlePage;
