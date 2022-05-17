import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "80vh",
  maxWidth: "80vw",
};

function BasicModal(prop) {
  return (
    <Modal
      open={prop.open}
      onClose={prop.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={require("../img/" + prop.img)} alt="" />
      </Box>
    </Modal>
  );
}

export default BasicModal;
