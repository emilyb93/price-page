interface PriceTextProps {
  price: number;
  isHover: boolean;
}

function PriceText({ price, isHover }: PriceTextProps) {
  const fontColour = isHover
    ? "text-violet-50 dark:text-gray-100"
    : "text-violet-950 dark:text-violet-50";

  return (
    <div className={"flex flex-row items-center"}>
      <p className={["text-5xl font-bold", fontColour].join(" ")}>${price}</p>
      <p className={["text-1xl ml-2", fontColour].join(" ")}>/ Month</p>
    </div>
  );
}

export default PriceText;
