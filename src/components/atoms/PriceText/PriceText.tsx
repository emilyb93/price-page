import "./PriceText.css";

interface PriceTextProps {
  price: number;
  period: "Month" | "Year";
}

function PriceText({ price, period }: PriceTextProps) {
  return (
    <div className="price-text-container">
      <p className="price-text">${price}</p>
      <p className="price-period">/ {period}</p>
    </div>
  );
}

export default PriceText;
