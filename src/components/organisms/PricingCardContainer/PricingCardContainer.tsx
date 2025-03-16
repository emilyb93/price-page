import { usePlan } from "../../wrappers/PlanProvider/PlanProvider";
import PricingCard from "../PricingCard/PricingCard";
import "./PricingCardContainer.css";

function PricingCardContainer() {
  const plans = usePlan();

  if (!plans) return null;
  return (
    <div className="pricing-card-container">
      {plans.map((plan) => (
        <PricingCard key={plan.title} planInfo={plan} />
      ))}
    </div>
  );
}
export default PricingCardContainer;
