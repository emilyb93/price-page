import { IconContext } from "react-icons";

import { FaCircleXmark } from "react-icons/fa6";

interface IconNoProps {
  focus: boolean;
}
function IconNo({ focus }: IconNoProps) {
  return (
    <IconContext.Provider
      value={{
        color: focus
          ? "bg-violet-100 dark:bg-violet-200"
          : "bg-violet-500 dark:bg-violet-300",
      }}
    >
      <FaCircleXmark />
    </IconContext.Provider>
  );
}
export default IconNo;
