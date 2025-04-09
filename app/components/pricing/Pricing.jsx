"use client";

import PriceCard from "../PriceCard";
import { useState } from "react";

const Pricing = () => {
  const [subscription, setSubscription] = useState("monthly");
  const priceCardsData = [
    {
      type: "monthly",
      title: "Basic Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      price: 49,
      subscription: "month",
    },
    {
      type: "monthly",
      title: "Premium Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      price: 79,
      subscription: "per month",
    },
    {
      type: "monthly",
      title: "Ultimate Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
      price: 99,
      subscription: "per month",
    },
    {
      type: "yearly",
      title: "Basic Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      price: 294,
      subscription: "per year",
    },
    {
      type: "yearly",
      title: "Premium Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      price: 474,
      subscription: "per year",
    },
    {
      type: "yearly",
      title: "Ultimate Plan",
      discount: "Up to 50% off on Yearly Plan",
      description:
        "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
       price: 594,
      subscription: "per year",
    },
  ];

  const filteredCards = priceCardsData.filter(
    (item) => item.type === subscription
  );



  return (
    <div className="pricing-wrapper">
      <div className="pricing-head">
        <div className="section-title">
          <h2>Our Pricing</h2>
        </div>
        <div className="section-description">
          <p>
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe that
            everyone deserves access to personalized nutrition guidance and
            resources.
          </p>
        </div>
      </div>

      <div className="subscription-buttons-box-wrapper">
  <div className="subscription-buttons-box">
    <button
      onClick={() => setSubscription("monthly")}
      className={subscription === "monthly" ? "activePrice" : ""}
    >
      Monthly
    </button>
    <button
      onClick={() => setSubscription("yearly")}
      className={subscription === "yearly" ? "activePrice" : ""}
    >
      Yearly
    </button>
  </div>

  <p>Save 50% on yearly</p>
</div>


      <div className="price-cards-wrapper">
        {filteredCards.map((item, index) => (
          <PriceCard
            key={index}
            title={item.title}
            discount={item.discount}
            description={item.description}
            price={item.price}
            subscription={item.subscription}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
