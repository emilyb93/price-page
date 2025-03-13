import IconNo from "../../atoms/IconNo/IconNo";
import IconYes from "../../atoms/IconYes/IconYes";

interface FeatureProps {
  text: string;
  available: boolean;
  level: "primary" | "secondary";
}
const colours = {
  primary: {
    fontYes: "text-violet-950 dark:text-violet-50",
    fontNo: "text-violet-400 dark:text-gray-400",
  },
  secondary: {
    fontYes: "text-violet-50 dark:text-gray-100",
    fontNo: "text-violet-400 dark:text-violet-400",
  },
};

const Feature = ({ text, available, level }: FeatureProps) => (
  <div className="flex items-center gap-3 font-medium">
    {available ? <IconYes level={level} /> : <IconNo level={level} />}
    <span
      className={available ? colours[level].fontYes : colours[level].fontNo}
    >
      {text}
    </span>
  </div>
);

export default Feature;
