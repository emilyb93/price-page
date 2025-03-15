import "./GetStartedButton.css";
export type GetStartedButtonProps = {
  isHover: boolean;
};
function GetStartedButton({ isHover }: GetStartedButtonProps) {
  const baseClass = `button button-${
    isHover === true ? "primary" : "secondary"
  }`;
  const disabledClass = !isHover ? "button-disabled" : "";

  return (
    <button className={`${baseClass} ${disabledClass} my-3`}>
      Get Started Now
    </button>
  );
}

export default GetStartedButton;
