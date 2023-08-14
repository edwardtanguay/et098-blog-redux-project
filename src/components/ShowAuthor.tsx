import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IShowAuthorProps {
  userId: string;
}
const ShowAuthor = ({ userId }: IShowAuthorProps) => {
  const author = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === userId)
  );
  return (
    <div className="px-2 text-CURRENT_LINE">
      von {author ? author.fullName : "Unbekannter Autor"}
    </div>
  );
};

export default ShowAuthor;
