import TestimonialSwiper from "../TestimonialSwiper";

const Testimonials = () => {
  const featureCardsData = [
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
    {
      image: "/assets/img/testimonials/author1.png",
      author: "Jennifer Anderson",
      description:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    },
  ];

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-head">
        <div className="section-title">
          <h2>testimonials</h2>
        </div>
        <div className="section-description">
          <p>
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>
      </div>

      <div className="testimonials-cards-wrapper">
        <TestimonialSwiper testimonials={featureCardsData} />
      </div>
    </div>
  );
};

export default Testimonials;
