import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import "./TodoApp.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { TodoListBox } from "./TodoListBox";
import { CreateProject } from "./CreateProject";
import { DragDropContext } from "react-beautiful-dnd";
import { ProjectDelete } from "./ProjectDelete";
import { BorderBottom } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  textAlign: "center",
  //   color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

export function TodoApp() {
  const [data, setData] = useState([]);
  const [workspace, setWorkspace] = useState([]);
  const [work, setWork] = useState("");

  const getTodos = () => {
    axios
      .get("http://localhost:3000/todos")
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => console.log(e));

    axios
      .get("http://localhost:3000/workspace")
      .then(({ data }) => {
        console.log(data);
        let values = [];
        for (let i = 0; i < data.length; i++) {
          values.push(data[i].title);
        }
        setWorkspace(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const values = data.filter((item) => item.work === work);
  const todo = values.filter((item) => item.status === "todo");
  const doing = values.filter((item) => item.status === "doing");
  const done = values.filter((item) => item.status === "done");
  const archived = values.filter((item) => item.status === "archived");

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    removed.status = droppableDestination.droppableId;

    axios.patch(`http://localhost:3000/todos/${removed.id}`, {
      status: removed.status,
    });

    // removed.status = destClone;

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const [state, setState] = useState({
    todo: todo,
    doing: doing,
    done: done,
  });

  let id2List = {
    todo: todo,
    doing: doing,
    done: done,
  };

  const getList = (id) => id2List[id];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      console.log(getList(source.droppableId), source.droppableId);
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      setState(state);
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      console.log(result);

      setState({
        items: result.todo,
        selected: result.doing,
      });
    }
  };

  const todoBox = [
    {
      title: "Todo",
      items: todo,
      id: "todo",
    },
    {
      title: "In Progress",
      items: doing,
      id: "doing",
    },
    {
      title: "Completed",
      items: done,
      id: "done",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index, item) => {
    setSelectedIndex(index);
    setWork(item);
    console.log(event);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ height: "100%", borderRight: "1px solid gray" }}
      >
        <Grid item md={3} style={{ height: "100%", border: "1px solid gray" }}>
          <Paper>
            <List>
              {workspace.map((item, index) => {
                return (
                  <Item>
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) =>
                          handleListItemClick(event, index, item.title)
                        }
                      >
                        <ListItemText
                          primary={item.title}
                          className="todoapp_project"
                        />
                        <ProjectDelete getTodos={getTodos} items={item} />
                      </ListItemButton>
                    </ListItem>
                  </Item>
                );
              })}
            </List>
            <CreateProject getTodos={getTodos} />
          </Paper>
        </Grid>
        <Grid item md={9}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Grid container justifyContent="space-around">
              {todoBox.map((item) => {
                return (
                  <Grid item md={3} className="todolist_box">
                    <Card>
                      <TodoListBox
                        items={item.items}
                        title={item.title}
                        id={item.id}
                        getTodos={getTodos}
                        work={work}
                        archived={archived}
                      />
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </DragDropContext>
        </Grid>
      </Grid>
    </>
  );
}
