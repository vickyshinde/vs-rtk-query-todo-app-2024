import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../../api/apiSlice";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Divider } from "@mui/material";

const TodosList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  let content;

  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (isSuccess) {
    // content = JSON.stringify(todos);
    content = todos.map((todo) => {
      return (
        <Box key={todo.id} data-testid="todoListID">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <input
                data-testid="checkbox"
                type="checkbox"
                checked={todo.completed}
                id={todo.id}
                onChange={() =>
                  updateTodo({
                    ...todo,
                    completed: !todo.completed,
                  })
                }
              />
            </Grid>
            <Grid item xs={8}>
              <label htmlFor={todo.id}>{todo.title}</label>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                role="button"
                aria-label="delete"
                onClick={() => deleteTodo({ id: todo.id })}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
};

export default TodosList;
