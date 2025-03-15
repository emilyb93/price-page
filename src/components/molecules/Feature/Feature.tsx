import IconNo from "../../atoms/IconNo/IconNo";
import IconYes from "../../atoms/IconYes/IconYes";

interface FeatureProps {
  text: string;
  available: boolean;
  isHover: boolean;
}
const hoverColours = {
  false: {
    fontYes: "text-violet-950 dark:text-violet-50",
    fontNo: "text-violet-400 dark:text-gray-400",
  },
  true: {
    fontYes: "text-violet-50 dark:text-gray-100",
    fontNo: "text-violet-400 dark:text-violet-400",
  },
};

const Feature = ({ text, available, isHover }: FeatureProps) => (
  <div className="flex items-center gap-3 font-medium">
    {available ? <IconYes isHover={isHover} /> : <IconNo isHover={isHover} />}
    <span
      className={
        available
          ? hoverColours[`${isHover}`].fontYes
          : hoverColours[`${isHover}`].fontNo
      }
    >
      {text}
    </span>
  </div>
);

export default Feature;
