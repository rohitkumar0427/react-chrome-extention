import { TodoBoxTitle } from "./TodoBoxTitle";
import {
  Card,
  CardContent,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { TodoListItem } from "./TodoListItem";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { ArchivedTodos } from "./ArchivedTodos";

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

export function TodoListBox({ title, items, id, getTodos, work, archived }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("false");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(work);

  const handleChange = (e) => setText(e.target.value);
  const handleClick = (e) => {
    const payload = {
      title: text,
      status: "todo",
      work: work,
    };

    axios
      .post("http://localhost:3000/todos", payload)
      .then((res) => getTodos());

    handleClose();
  };

  return (
    <>
      <Card>
        <CardContent>
          <TodoBoxTitle title={title} />
          <Droppable droppableId={id}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.title}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoListItem key={item.id} item={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {id === "todo" && (
            <>
              <Button onClick={handleOpen}>Add Todo</Button>
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
          )}
          {id === "done" && (
            <ArchivedTodos items={archived} getTodos={getTodos} />
          )}
        </CardContent>
      </Card>
    </>
  );
}
