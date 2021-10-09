import { Paper, Typography } from "@mui/material";
// import "@fontsource/roboto/500.css";
import "./TodoApp.css";

export function TodoBoxTitle({ title }) {
  return (
    <>
      <Paper elevation={6}>
        <Typography className="todolist_title" variant="h4" align="center">
          {title}
        </Typography>
      </Paper>
    </>
  );
}
