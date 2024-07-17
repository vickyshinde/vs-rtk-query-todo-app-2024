import * as React from "react";
import Container from "@mui/material/Container";
import TodosFrom from "./componants/todos/todosForm";
import TodosList from "./componants/todos/todosList";
import { Typography } from "@mui/material";

export default function App() {
  console.log("hi");
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" data-testid="appTitle">
        Todo App
      </Typography>
      <TodosFrom />
      <TodosList />
    </Container>
  );
}
