import cardInfo from "../../../data/cardInfo.json";
import PricingCard from "../PricingCard/PricingCard";
import "./PricingCardContainer.css";

function PricingCardContainer() {
  return (
    <div className="pricing-card-container">
      {cardInfo.plans.map((plan) => (
        <PricingCard key={plan.title} planInfo={plan} />
      ))}
    </div>
  );
}
export default PricingCardContainer;
