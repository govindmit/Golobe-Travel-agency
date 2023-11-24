import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "styled-components";
import { Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([50, 1200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box className="box" sx={{ width: 300 }}>
        <Slider
          className="slider"
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={50}
          max={1200}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Typography>${value[0]}</Typography>
      <Typography>${value[1]}</Typography>
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

  .box{
    span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.slider.css-187mznn-MuiSlider-root {
      color: black;
      height: 1px;
    }
  }


`;