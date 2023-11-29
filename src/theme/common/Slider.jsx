import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "styled-components";
import { Typography } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({isHotel,slider}) {

  const minRange = isHotel ? 500 : 50;
  const maxRange = isHotel ? 1200 : 1200;
 
  const [value, setValue] = React.useState([minRange,maxRange]);
  React.useEffect(() => {
    if(slider){
      setValue([50,1200])
    }
  }, [slider])
  
  console.log(slider)
  const handleChange = (event,newValue) => {
    setValue(newValue);
    
  };

  return (
    <Wrapper>
 
      <Box className="box" sx={{ width: 300 }}>
        <Slider
          className="slider"
          getAriaLabel={() => "Temperature range"}
          value={value} 
          min={minRange}
          max={maxRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>${minRange}</Typography>
        <Typography>${maxRange}</Typography>
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




  
  