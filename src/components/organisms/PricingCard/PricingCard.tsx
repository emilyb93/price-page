import GetStartedButton from "../../atoms/GetStartedButton/GetStartedButton";
import PriceText from "../../atoms/PriceText/PriceText";
import Feature from "../../molecules/Feature/Feature";

import "./PricingCard.css";

export interface FeatureInfo {
  featureText: string;
  available: boolean;
}
export interface PlanInfo {
  title: string;
  subtitle: string;
  price: number;
  features: FeatureInfo[];
}
interface PricingCardProps {
  planInfo: PlanInfo;
}

function PricingCard({ planInfo }: PricingCardProps) {
  const { title, subtitle, price, features } = planInfo;

  return (
    <div className="pricing-card">
      <section className="pricing-card-plan-section">
        <h3 className="pricing-card-title">{title}</h3>
        <h4 className="pricing-card-subtitle">{subtitle}</h4>
        <PriceText price={price} />
        <GetStartedButton />
      </section>
      <section className="pricing-card-features-section">
        <ul className="pricing-card-features">
          {features.map((feature) => {
            return (
              <Feature
                key={feature.featureText}
                text={feature.featureText}
                available={feature.available}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default PricingCard;
