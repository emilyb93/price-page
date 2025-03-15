import { useHover } from "usehooks-ts";
import GetStartedButton from "../../atoms/GetStartedButton/GetStartedButton";
import PriceText from "../../atoms/PriceText/PriceText";
import Feature from "../../molecules/Feature/Feature";
import { useRef } from "react";

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

const hoverColours = {
  false: {
    title: "text-violet-950 dark:text-violet-50",
    subtitle: "text-violet-400 dark:text-gray-400",
  },
  true: {
    title: "text-violet-50 dark:text-gray-100",
    subtitle: "text-violet-400 dark:text-violet-400",
  },
};

function PricingCard({ planInfo }: PricingCardProps) {
  const { title, subtitle, price, features } = planInfo;
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef as React.RefObject<HTMLElement>);
  return (
    <div
      ref={hoverRef}
      className={[
        "h-150 w-90 flex flex-col p-5 ",
        isHover
          ? "bg-violet-700 dark:bg-violet-700"
          : "bg-violet-100 dark:bg-gray-700",
      ].join(" ")}
    >
      <h2
        className={[
          "font-bold text-4xl my-2",
          hoverColours[`${isHover}`].title,
        ].join(" ")}
      >
        {title}
      </h2>
      <h3
        className={[
          "font-semibold text-1xl my-2",
          hoverColours[`${isHover}`].subtitle,
        ].join(" ")}
      >
        {subtitle}
      </h3>
      <PriceText price={price} isHover={isHover} />
      <GetStartedButton isHover={isHover} />
      <ul className="my-2">
        {features.map((feature) => {
          return (
            <Feature
              text={feature.featureText}
              available={feature.available}
              isHover={isHover}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PricingCard;
