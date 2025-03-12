import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";

interface IconYesProps {
  focus: boolean;
}
function IconYes({ focus }: IconYesProps) {
  return (
    <IconContext.Provider
      value={{
        color: focus
          ? "bg-violet-100 dark:bg-violet-200"
          : "bg-violet-500 dark:bg-violet-300",
      }}
    >
      <FaCircleCheck />
    </IconContext.Provider>
  );
}
export default IconYes;
