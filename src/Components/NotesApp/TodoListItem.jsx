import "./TodoApp.css";
import { Typography, Button, Paper } from "@mui/material";
import axios from "axios";

function ArchiveButton({ id }) {
  const handleArchive = (e) => {
    axios.patch(`http://localhost:3000/todos/${id}`, {
      status: "archived",
    });
    document.getElementById(id).style.display = "none";
  };

  return <Button onClick={handleArchive}>Archieve</Button>;
}

export function TodoListItem({ item }) {
  function drag(ev) {
    ev.dataTransfer.setData("card_id", ev.target.id);

    setTimeout(() => {
      ev.target.style.display = "none";
    }, 10);
  }

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Paper elevation={12} variant="outlined" color="primary">
        <Typography
          draggable="true"
          onDragStart={drag}
          onDragOver={dragOver}
          className="todolist_item"
          id={item.id}
        >
          {item.title}{" "}
          <span style={{ position: "absolute", right: 0 }}>
            {item.status === "done" && <ArchiveButton id={item.id} />}
          </span>
        </Typography>
      </Paper>
    </>
  );
}
