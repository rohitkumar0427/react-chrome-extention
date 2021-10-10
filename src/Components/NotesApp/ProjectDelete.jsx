import {
  Button,
  Modal,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  color: "#fff",
  boxShadow: 24,
  p: 4,
};

export function ProjectDelete({ items, getTodos }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (item) => {
    axios.delete(`http://localhost:3000/workspace/${item.id}`);
    getTodos();
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography styles={{color: "white"}}>
            Are you sure you want to delete "{items.title}" todolists?
          </Typography>
          <Grid container justifyContent="flex-end">
            <Button onClick={() => handleDelete(items)}>Yes</Button>
            <Button onClick={() => handleClose}>No</Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
