import {
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  Typography,
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

export function ArchivedTodos({ items, getTodos }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTodo = (item) => {
    axios
      .patch(`http://localhost:3000/todos/${item.id}`, {
        status: "todo",
      })
      .then(() => getTodos())
      .catch((e) => console.log(e));
  };

  const handleDelete = (item) => {
    axios.delete(`http://localhost:3000/todos/${item.id}`);

    getTodos();
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ width: "100%" }}
        color="secondary"
        onClick={handleOpen}
        disabled={items.length === 0 ? true : false}
      >
        Archived Todo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List>
            {items.length === 0 ? (
              <>
                <ListItem disablePadding>
                  <ListItemText primary="Nothing to show here" />
                </ListItem>
              </>
            ) : (
              items.map((item) => {
                return (
                  <ListItem disablePadding>
                    <Typography>{item.title}</Typography>
                    <Button onClick={() => handleTodo(item)}>
                      Move to Todo
                    </Button>
                    <Button onClick={() => handleDelete(item)}>Delete</Button>
                  </ListItem>
                );
              })
            )}
          </List>
        </Box>
      </Modal>
    </>
  );
}
