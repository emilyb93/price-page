import GetStartedButton from "../../atoms/GetStartedButton/GetStartedButton";
import PriceText from "../../atoms/PriceText/PriceText";
import Feature from "../../molecules/Feature/Feature";

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
  level: "primary" | "secondary";
  selected: boolean;
}

const colours = {
  primary: {
    title: "text-violet-950 dark:text-violet-50",
    subtitle: "text-violet-400 dark:text-gray-400",
  },
  secondary: {
    title: "text-violet-50 dark:text-gray-100",
    subtitle: "text-violet-400 dark:text-violet-400",
  },
};

function PricingCard({ level, planInfo, selected }: PricingCardProps) {
  const { title, subtitle, price, features } = planInfo;
  return (
    <div
      className={[
        "h-150 w-90 flex flex-col p-5 ",
        level === "primary"
          ? "bg-violet-100 dark:bg-gray-700"
          : "bg-violet-700 dark:bg-violet-700",
      ].join(" ")}
    >
      <h2
        className={["font-bold text-4xl my-2", colours[level].title].join(" ")}
      >
        {title}
      </h2>
      <h3
        className={[
          "font-semibold text-1xl my-2",
          colours[level].subtitle,
        ].join(" ")}
      >
        {subtitle}
      </h3>
      <PriceText price={price} level={level === "secondary"} />
      <GetStartedButton selected={selected} level={level} />
      <ul className="my-2">
        {features.map((feature) => {
          return (
            <Feature
              text={feature.featureText}
              available={feature.available}
              level={level}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PricingCard;
