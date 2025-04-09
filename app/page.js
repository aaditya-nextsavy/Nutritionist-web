import HeroBanner from "./components/heroBanner/HeroBanner";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Blogs from "./components/blogs/Blogs";
import Testimonials from "./components/testimonials/Testimonials";

export const metadata = {
  title: "Home | Nutritionist",
  description:
    "Welcome to Nutritionist – your go-to place for personalized nutrition advice, healthy recipes, and wellness tips.",
};

export default function Home() {
  return (
    <main>
      <section className="hero-banner-section-wrapper">
        <HeroBanner />
      </section>

      <section className="features-section-wrapper">
        <div className="container">
          <Features />
        </div>
      </section>

      <section className="blogs-section-wrapper">
        <div className="container">
          <Blogs /> 
        </div>
      </section>

      <section className="testimonials-section-wrapper">
        <div className="container">
          <Testimonials /> 
        </div>
      </section>

      <section className="pricing-section-wrapper">
        <div className="container">
          <Pricing />
        </div>
      </section>

    </main>
  );
}
