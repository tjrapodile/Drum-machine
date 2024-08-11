import { useContext } from "react";
import { Context } from "../Context";

function Display() {
  const { switches, innerText } = useContext(Context);

  return (
    <div id="display" className="display">
      <p>{!switches.powerCheck ? "No power!" : innerText}</p>
    </div>
  );
}
export default Display;