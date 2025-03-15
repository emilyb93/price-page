import { IconContext } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";
import "./IconYes.css";

function IconYes() {
  return (
    <IconContext.Provider value={{ className: "icon-yes" }}>
      <FaCircleCheck />
    </IconContext.Provider>
  );
}

export default IconYes;
