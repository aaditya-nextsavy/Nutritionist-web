import React from "react";
import Image from "next/image";
const NewsfeedBanner = () => {
  return (
    <div className="newsfeed">
      <div className="newsfeed-information">
        <Image
          src={"/assets/img/header_ball.svg"}
          width={20}
          height={20}
          alt="newsfeedballicon"
        />
        <p>Join Our Personalized Nutrition Demo For Free</p>
      </div>
      <div className="newsfeed-link">
        <Image
          src={"/assets/img/rightArrow.svg"}
          width={20}
          height={20}
          alt="rightIcon"
        />
      </div>
    </div>
  );
};

export default NewsfeedBanner;
