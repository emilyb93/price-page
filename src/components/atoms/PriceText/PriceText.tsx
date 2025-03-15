import "./PriceText.css";

interface PriceTextProps {
  price: number;
}

function PriceText({ price }: PriceTextProps) {
  return (
    <div className="price-text-container">
      <p className="price-text">${price}</p>
      <p className="price-period">/ Month</p>
    </div>
  );
}

export default PriceText;
