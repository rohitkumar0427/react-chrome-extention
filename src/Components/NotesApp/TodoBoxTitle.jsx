import { Paper, Typography } from "@mui/material";
// import "@fontsource/roboto/500.css";
import "./TodoApp.css";

export function TodoBoxTitle({ title }) {
  return (
    <>
      <Paper elevation={6}>
        <h1 className="todolist_title" align="center">
          {title}
        </h1>
      </Paper>
    </>
  );
}
