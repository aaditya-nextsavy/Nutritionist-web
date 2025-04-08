import React from "react";
import FeatureCard from "../FeatureCard";

const Features = () => {
  const featureCardsData = [
    {
      svg: "/assets/img/features/card1.svg",
      heading: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    },
    {
        svg: "/assets/img/features/card2.svg",
      heading: "Guidance from Certified Nutritionists",
      description: "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
    },
    {
        svg: "/assets/img/features/card3.svg",
      heading: "Food Tracking and Analysis",
      description: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
    },
    {
        svg: "/assets/img/features/card4.svg",
      heading: "Meal Planning and Recipes",
      description: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.",
    },
    {
        svg: "/assets/img/features/card5.svg",
      heading: "Lifestyle and Behavior Coaching",
      description: "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
    },
    {
        svg: "/assets/img/features/card6.svg",
      heading: "Nutritional Education and Workshops",
      description: "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
    }
  ];

  return (
    <div className="features-wrapper">
      <div className="features-head">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="section-description">
          <p>
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>
      </div>
      <div className="features-cards-wrapper">
        {featureCardsData.map((item, index) => (
          <FeatureCard
            key={index}
            svg={item.svg}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
