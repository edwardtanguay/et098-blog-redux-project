import { useDispatch } from "react-redux";
import { IArticle, reactionAdded } from "../reducer/blogSlice";
import React from "react";

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

const ReactionButtons: React.FC<IReactionButtonProps> = ({ article }) => {

  const dispatch = useDispatch();
  
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="px-4 py-1 border border-COMMENT m-2 rounded-xl bg-FOREGROUND/30"
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
