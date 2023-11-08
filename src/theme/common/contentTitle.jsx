import React from "react";
import Wrapper from "../../assets/wrapper/Reviews";
import { Button, CardContent, Container, Typography } from "@mui/material";

const ContentTitle = ({title,desc,btn}) => {
  return (
    <Wrapper>
      <Container>
        <CardContent className="rev-div">
          <div className="review">{title}</div>

          <Typography className="rev-title" variant="h5" component="div">
          {desc}
          </Typography>
        </CardContent>

        <div className="btn-div">
          <div className="btn-center">
            <Button className="btn-text">{btn}</Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContentTitle;
