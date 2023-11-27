import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EmailIcon from "@mui/icons-material/Email";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const navigate = useNavigate();
  const [open, setIsModalOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");

  const handleOpen = () => setIsModalOpen(true);

  const handleClose = () => {
    setIsModalOpen(false);
    setEmailValue("");
  };

  const handleContinueWithEmail = () => {
    console.log("Email entered:", emailValue);
    localStorage.setItem("InputEmail", emailValue);
    {
      emailValue ? navigate("/add-card") : handleClose();
    }
  };

  return (
    <div>
    <Button variant="outlined" className="btn" onClick={handleOpen}>
        <EmailIcon />
        <Typography className="text3">Continue with email</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            type="email"
            label="Your email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button onClick={handleContinueWithEmail}>Continue</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
