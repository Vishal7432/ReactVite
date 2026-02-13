import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIsLike] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLike(!isLike);
    setClicks(clicks + 1);
  };
  let likeStyle = {
    color: "red",
  };
  return (
    <div>
      <p>Clicked = {clicks}</p>
      <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
