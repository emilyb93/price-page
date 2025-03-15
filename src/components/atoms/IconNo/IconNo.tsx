import { IconContext } from "react-icons";
import { FaCircleXmark } from "react-icons/fa6";
import "./IconNo.css";

function IconNo() {
  return (
    <IconContext.Provider value={{ className: "icon-no" }}>
      <FaCircleXmark />
    </IconContext.Provider>
  );
}

export default IconNo;
