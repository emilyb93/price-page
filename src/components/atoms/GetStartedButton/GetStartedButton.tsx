import "./GetStartedButton.css";
import React from "react";
interface GetStartedButtonProps {
  setPeriod: React.Dispatch<React.SetStateAction<"Month" | "Year">>;
}
function GetStartedButton({ setPeriod }: GetStartedButtonProps) {
  function handleClick() {
    setPeriod((currPeriod) => {
      if (currPeriod === "Month") return "Year";
      return "Month";
    });
  }
  return (
    <button className={`button`} onClick={handleClick}>
      Get Started Now
    </button>
  );
}

export default GetStartedButton;
