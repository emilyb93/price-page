import { IconContext } from "react-icons";

import { FaCircleXmark } from "react-icons/fa6";

interface IconNoProps {
  level: "primary" | "secondary";
}
function IconNo({ level }: IconNoProps) {
  return (
    <IconContext.Provider
      value={{
        className:
          level === "primary"
            ? "text-violet-300 dark:text-gray-300"
            : "text-violet-500 dark:text-violet-500",
      }}
    >
      <FaCircleXmark />
    </IconContext.Provider>
  );
}
export default IconNo;
