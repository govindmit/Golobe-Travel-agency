import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// import googleicon from "../../assets/images/googleicon.svg";
import { Button } from "@mui/material";
import Wrapper from "../../../assets/wrapper/LoginCardWrapper";
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import AddCard from "./AddCard";



const LoginGoogle = () => {
    const navigate= useNavigate()
  return (
    <Wrapper>
      <Button style={{ marginTop: "20px",marginLeft:"15rem"}}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decode=jwtDecode(credentialResponse.credential)
            console.log(decode.email);
            localStorage.setItem("email",decode.email)
            navigate("/add-card")
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Button>
    </Wrapper>
  );
};

export default LoginGoogle;
{
  /* <Button className="btn" variant="outlined">
        <img src={googleicon} alt="Google Icon" />
      </Button> */
}
