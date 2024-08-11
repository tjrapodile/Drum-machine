import { useContext } from "react";
import { Context } from "../Context";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

// Create a switch with custom styling
const RedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: "#FFFFFF",
    '&.Mui-checked': {
      color: "#ca3e47",
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#ca3e47",
    },
  },
  '& .MuiSwitch-track': {},
}));

function Switches() {
  const { switches, handleChange } = useContext(Context);

  return (
    <div className="bottomBar">
      <FormControlLabel
        control={
          <RedSwitch
            checked={switches.powerCheck}
            onChange={handleChange}
            name="powerCheck"
            inputProps={{ "aria-label": "power checkbox" }}
          />
        }
        label="Power"
      />
      <FormControlLabel
        control={
          <RedSwitch
            checked={switches.soundsCheck}
            onChange={handleChange}
            name="soundsCheck"
            inputProps={{ "aria-label": "sounds checkbox" }}
            disabled={!switches.powerCheck}
          />
        }
        label="Piano"
        labelPlacement="start"
      />
    </div>
  );
}

export default Switches;
