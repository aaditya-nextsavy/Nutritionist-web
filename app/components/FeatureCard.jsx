import Image from "next/image";

const FeatureCard = ({ svg, heading, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-title">
        <div className="icon">
          <Image src={svg} alt={heading} width={40} height={40} />
        </div>

        <h3>{heading}</h3>
      </div>

      <div className="feature-card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
