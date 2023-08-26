import { useParams } from "react-router-dom";
import AuthorDirectory from "../components/author/AuthorDirectory";
import AuthorsArticles from "../components/author/AuthorsArticles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "../reducer/userSlice";

const AuthorPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => {
    dispatch(setUserId(userId));
  }, [userId, dispatch]);
  return (
    <div>
      {userId === undefined ? <AuthorDirectory /> : <AuthorsArticles />}
    </div>
  );
};

export default AuthorPage;
