import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectUserById } from "../reducer/userSlice";

interface IShowAuthorProps {
  userId: string;
}
const ShowAuthor: React.FC<IShowAuthorProps> = ({ userId }) => {
  const author = useSelector((state: RootState) =>
    selectUserById(state, userId)
  );
  return (
    <div className="px-2 text-CURRENT_LINE">
      von {author ? author.fullName : "Unbekannter Autor"}
    </div>
  );
};

export default ShowAuthor;
