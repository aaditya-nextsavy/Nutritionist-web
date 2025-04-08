import HeroBanner from "./components/heroBanner/HeroBanner";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";

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

      <section className="pricing-section-wrapper">
        <div className="container">
          <Pricing />
        </div>
      </section>

    </main>
  );
}
