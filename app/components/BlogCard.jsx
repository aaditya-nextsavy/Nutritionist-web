import Image from "next/image";
import BlogNavigation from "./BlogNavigation";

const BlogCard = ({
  image,
  authorImage,
  title,
  category,
  author,
  readTime,
  date,
  heading,
  description,
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <Image
          src={image}
          alt={heading}
          fill
          quality={100}
      
        />
      </div>
      <div className="blog-card-title">
        <p>{category}</p>
        <h2>{title}</h2>
      </div>
      <div className="blogs-description">
        <p>{description}</p>
      </div>
      <div>
        <BlogNavigation
          author={author}
          authorImage={authorImage}
          date={date}
          readTime={readTime}
        />
      </div>
    </div>
  );
};

export default BlogCard;
