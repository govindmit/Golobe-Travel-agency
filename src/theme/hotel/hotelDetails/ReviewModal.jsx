import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Wrapper from "../../../assets/wrapper/ReviewSectionwrapper";
import Group from  '../../../assets/images/Group.svg'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography className="text">Reviews</Typography>
        <Button className="btn" onClick={handleOpen}>
        Give your reviews
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <img style={{marginLeft:"5rem"}}src={Group}/>
          <Typography style={{fontSize:"18px",fontWeight:"bold"}}>
        HOW WAS YOUR EXPERIENCE ?
          </Typography>
          <Typography className="text1">We value your feedback. </Typography>
         <Typography className="text2" style={{color:"blue"}} >please rate your overall experience</Typography>
      <div style={{display:"flex",justifyContent:"center"}}>
     <Button><StarBorderIcon/></Button> 
     <Button><StarBorderIcon/></Button> 
     <Button><StarBorderIcon/></Button> 
     <Button><StarBorderIcon/></Button> 
     <Button><StarBorderIcon/></Button> 
     
      </div>
      <Typography style={{fontSize:"11px"}}>If you have any specific feedback please let us know below</Typography>
      <textarea style={{height:"7rem",marginTop:"1rem",marginLeft:"2rem"}} type="text" />
        
        </Box>
      </Modal>
    </Wrapper>
  );
}
