import React from "react";
import Wrapper from "../../../assets/wrapper/LoginCardWrapper";
import EmailIcon from '@mui/icons-material/Email';
import {
  Container,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import LoginGoogle from "./LoginGoogle";

// googoleclientid="544990497746-ub9gbhv49e1h9gkl1bfac00qk0bnml1e.apps.googleusercontent.com"
//apikey="AIzaSyDeJZZyrN3ooi7-7hzPSrukoUaiSSJPq6A"

const LoginCard = () => {
  return (
    <Wrapper>
      <Container>
        <Card className="card">
          <Box className="box">
            <Typography className="text">Login or Sign up to book</Typography>
            {/* <div> */}
            <TextField className="textField" label="phone Number" />
            <Typography className="text2">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
              <span style={{ fontWeight: "400" }}> Privacy Policy</span>
            </Typography>
            <Button variant="outlined" className="box-btn">
              Continue
            </Button>
            {/* </div> */}
          </Box>
          <Divider
            style={{ width: "92%", marginLeft: "1.2rem", marginTop: "1rem" }}
            flexItem
          >
            <Typography>Or</Typography>
          </Divider>
          <Box>
            <LoginGoogle />
            <Button variant="outlined" className="btn">
            <EmailIcon/><Typography className="text3">Continue with email</Typography>
            </Button>
            </Box>

        </Card>
      </Container>
    </Wrapper>
  );
};
export default LoginCard;
