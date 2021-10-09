import {
  Button,
  Modal,
  TextField,
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

export function CreateProject({ items, getTodos }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => setText(e.target.value);
  const handleClick = (e) => {
    const payload = {
      title: text,
    };
    axios
      .post("http://localhost:3000/workspace", payload)
      .then((res) => getTodos());
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Create Project/Workspace</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField placeholder="Add Todo" onChange={handleChange} />
          <Button onClick={handleClick}>Save</Button>
        </Box>
      </Modal>
    </>
  );
}
