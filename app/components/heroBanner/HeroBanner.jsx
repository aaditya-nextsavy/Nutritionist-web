import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import UserJoined from "../UserJoined";
const HeroBanner = () => {
  return (
    <div className="herobanner-wrapper">
      <div className="herobanner-image-wrapper">
        <div className="banner-colored-background">
          <div className="grid-overlay"></div>
          <div className="hero-image">
            <Image
              src="/assets/img/heroBanner/heroImage.png"
              alt="heroImage"
              fill
              quality={100}
              priority
              className="hero-img"
            />
          </div>
        </div>
      </div>

      <div className="herobanner-content-wrapper">
        <div className="herobanner-content">
          <div className="hero-subtitle">
            <h3>Transform Your ❤️ Health with</h3>
          </div>
          <div className="hero-heading">
            <h1>Personalized Nutrition Coaching</h1>
          </div>
          <div className="section-description">
            <p>
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
          </div>
          <div className="hero-buttons">
            <div>
              <PrimaryButton text={"Get Starter Today"} />
            </div>
            <div>
              <SecondaryButton text={"Book a Demo"} />
            </div>
          </div>
        </div>
        <div>
          <UserJoined />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
