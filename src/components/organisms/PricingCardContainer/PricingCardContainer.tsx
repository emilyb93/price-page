import { usePlan } from "../../wrappers/PlanProvider/PlanProvider";
import PricingCard from "../PricingCard/PricingCard";
import "./PricingCardContainer.css";

function PricingCardContainer() {
  const { planInfo } = usePlan();

  if (!planInfo) return null;
  return (
    <div className="pricing-card-container">
      {planInfo.map((plan) => (
        <PricingCard key={plan.title} planInfo={plan} />
      ))}
    </div>
  );
}
export default PricingCardContainer;
