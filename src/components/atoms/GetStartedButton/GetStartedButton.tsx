import "./GetStartedButton.css";
export type GetStartedButtonProps = {
  level: "primary" | "secondary";
  selected: boolean;
};
function GetStartedButton({ level, selected }: GetStartedButtonProps) {
  const baseClass = `button button-${level}`;
  const disabledClass = !selected ? "button-disabled" : "";

  return (
    <button className={`${baseClass} ${disabledClass} my-3`}>
      Get Started Now
    </button>
  );
}

export default GetStartedButton;
