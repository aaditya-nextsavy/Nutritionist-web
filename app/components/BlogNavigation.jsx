"use client";
import { useState } from "react";
import Image from "next/image";
import like from "../../public/assets/img/like.svg";
import liked from "../../public/assets/img/liked.svg";
import save from "../../public/assets/img/save.svg";
import saved from "../../public/assets/img/saved.svg";

const BlogNavigation = ({ authorImage, author, date, readTime }) => {
  const [isliked, setIsliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isHoveringLike, setIsHoveringLike] = useState(false);
  const [isHoveringSave, setIsHoveringSave] = useState(false);

  const toggleLike = () => {
    setIsliked(!isliked);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div className="blog-card-navigation">
      <div className="card-author-info">
        <div className="image">
          <Image src={authorImage} alt="authorImage" width={60} height={60} />
        </div>
        <div className="info">
          <h3>{author}</h3>
          <p>
            {date} - {readTime}
          </p>
        </div>
      </div>
      <div className="like-save-button-wrapper">
        <div
          className="like-button"
          onClick={toggleLike}
          onMouseEnter={() => setIsHoveringLike(true)}
          onMouseLeave={() => setIsHoveringLike(false)}
        >
          <Image
            src={isliked || isHoveringLike ? liked : like}
            width={20}
            height={18}
            alt="like"
          />
        </div>

        <div
          className="save-button"
          onClick={toggleSave}
          onMouseEnter={() => setIsHoveringSave(true)}
          onMouseLeave={() => setIsHoveringSave(false)}
        >
          <Image
            src={isSaved || isHoveringSave ? saved : save}
            width={14}
            height={18}
            alt="save"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
