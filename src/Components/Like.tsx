import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };
  if (!liked)
    return (
      <AiOutlineHeart color={"black"} size="40" onClick={() => toggle()} />
    );
  else
    return (
      <AiFillHeart color={"palevioletred"} size="40" onClick={() => toggle()} />
    );
};

export default Like;
