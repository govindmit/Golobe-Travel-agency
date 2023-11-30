

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "styled-components";
import { Typography} from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const {min, max,handleChange,value} = props;
  
return (
    <Wrapper>
      <Box className="box" sx={{ width: 300 }}>
        <Slider
          className="slider"
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={min}
          max={max}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>${min}</Typography>
        <Typography>${max}</Typography>
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .slider {
    span.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-eg0mwd-MuiSlider-thumb {
      color: #8dd3bb;
    }

    span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.slider.css-187mznn-MuiSlider-root {
      color: transparent;
    }
  }

  .box {
    span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.slider.css-187mznn-MuiSlider-root {
      color: black;
      height: 1px;
    }
  }
`;

