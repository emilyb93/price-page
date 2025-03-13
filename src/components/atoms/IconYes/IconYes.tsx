import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";

interface IconYesProps {
  level: "primary" | "secondary";
}
function IconYes({ level }: IconYesProps) {
  return (
    <IconContext.Provider
      value={{
        className:
          level === "primary"
            ? "text-violet-500 dark:text-violet-300"
            : "text-violet-100 dark:text-violet-200",
      }}
    >
      <FaCircleCheck />
    </IconContext.Provider>
  );
}
export default IconYes;
