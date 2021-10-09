import axios from "axios";
import { useEffect, useState } from "react";

export function GetTodos() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then(({ data }) => setTodoItems(data))
      .catch((e) => console.log(e));
  }, []);

  console.log(todoItems);

  return todoItems;
}
