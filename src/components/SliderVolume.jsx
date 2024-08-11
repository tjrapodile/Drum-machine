import { useContext } from "react";
import { Context } from "../Context";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function SliderVolume() {
  const { value, switches, handleChangeVolume } = useContext(Context);

  return (
    <div className="sliderVolume">
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChangeVolume}
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
            disabled={!switches.powerCheck}
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default SliderVolume;
