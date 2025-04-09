import PrimaryButton from "./PrimaryButton";
const PriceCard = ({
  title,
  discount,
  description,
  price,
  subscription,
  type,
}) => {
  return (
    <div className="price-card">
      <div className="price-card-header">
        <h3>{title}</h3>
        <span className="discount">{discount}</span>
      </div>
      <div className="section-description">
        <p>{description}</p>
      </div>

      <div className="price-info">
        <p>
          <span>${price} </span>
          /{subscription}
        </p>
      </div>
      <div> <PrimaryButton text={"choose plan"}/> </div>
    </div>
  );
};

export default PriceCard;
