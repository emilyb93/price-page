import { IconContext } from "react-icons";

import { FaCircleXmark } from "react-icons/fa6";

interface IconNoProps {
  isHover: boolean;
}
function IconNo({ isHover }: IconNoProps) {
  return (
    <IconContext.Provider
      value={{
        className: isHover
          ? "text-violet-500 dark:text-violet-500"
          : "text-violet-300 dark:text-gray-300",
      }}
    >
      <FaCircleXmark />
    </IconContext.Provider>
  );
}
export default IconNo;
