import IconNo from "../../atoms/IconNo/IconNo";
import IconYes from "../../atoms/IconYes/IconYes";
import "./Feature.css";

interface FeatureProps {
  text: string;
  available: boolean;
}

const Feature = ({ text, available }: FeatureProps) => (
  <div className="feature-container">
    {available ? <IconYes /> : <IconNo />}
    <span className={available ? "font-yes" : "font-no"}>{text}</span>
  </div>
);

export default Feature;
