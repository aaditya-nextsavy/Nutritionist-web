import BlogCard from "../BlogCard";

const Blogs = () => {
  const featureCardsData = [
    {
      image: "/assets/img/blogs/blogs1.png",
      authorImage: "/assets/img/blogs/author1.png",
      category: "Weight Loss",
      title: "The Benefits of Hydration for Weight Loss",
      author: "Emily Johnson",
      date: "23 May 2023",
      readTime: "5 min read",
      heading: "Personalized Nutrition Plans",
      description:
        "Discover how staying hydrated can support your weight loss goals and improve overall health.",
    },
    {
      image: "/assets/img/blogs/blogs2.png",
      authorImage: "/assets/img/blogs/author2.png",
      category: "Mindful Eating",
      title: "Cultivating a Healthy Relationship with Food",
      author: "Sarah Thompson",
      date: "23 May 2023 ",
      readTime: "5 min read",
      heading: "Personalized Nutrition Plans",
      description:
       "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being."
    },

    {
      image: "/assets/img/blogs/blogs3.png",
      authorImage: "/assets/img/blogs/author3.png",
      category: "Understanding Macronutrients",
      title: "Carbohydrates, Proteins, and Fats",
      author: "Mark Wilson",
      date: "23 May 2023",
      readTime: "5 min read",
      heading: "Personalized Nutrition Plans",
      description:
        "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
    },

    {
      image: "/assets/img/blogs/blogs4.png",
      authorImage: "/assets/img/blogs/author4.png",
      category: "Healthy Snacks on the Go",
      title: "Quick and Nutritious Options",
      author: "Emily Johnson",
      date: "23 May 2023",
      readTime: "5 min read",
      heading: "Personalized Nutrition Plans",
      description:
        "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
    },
  ];

  return (
    <div className="blogs-wrapper">
      <div className="blogs-head">
        <div className="section-title">
          <h2>Our Blogs</h2>
        </div>
        <div className="section-description">
          <p>
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here's what you can expect from our blog.
          </p>
        </div>
      </div>
      <div className="blogs-cards-wrapper">
        {featureCardsData.map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            authorImage={item.authorImage}
            title={item.title}
            category={item.category}
            author={item.author}
            readTime={item.readTime}
            date={item.date}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
