import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";

interface IconYesProps {
  isHover: boolean;
}
function IconYes({ isHover }: IconYesProps) {
  return (
    <IconContext.Provider
      value={{
        className: isHover
          ? "text-violet-100 dark:text-violet-200"
          : "text-violet-500 dark:text-violet-300",
      }}
    >
      <FaCircleCheck />
    </IconContext.Provider>
  );
}
export default IconYes;
