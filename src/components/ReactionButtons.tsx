import { useDispatch } from "react-redux";
import { reactionAdded } from "../reducer/blogSlice";
import { IArticle } from "../interface";

const reactionEmoji = {
  thumbSup: "🤙",
  hooray: "🎉",
  heart: "❤",
  rocket: "🚀",
  eyes: "👀",
};

interface IReactionButtonProps {
  article: IArticle;
}

const ReactionButtons= ({ article }:IReactionButtonProps) => {

  const dispatch = useDispatch();
  
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="px-2 py-1 border border-COMMENT mx-1 mb-4 rounded-xl bg-FOREGROUND/30"
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ blogId: article.id, reaction: name }))
        }
      >
        {emoji} {article.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
