import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAddTodoMutation } from "../../api/apiSlice";

const validationSchema = yup.object({
  title: yup.string("Enter your todo").required("todo is required"),
});

const TodosFrom = () => {
  const [addTodo] = useAddTodoMutation();

// This code defines a formik object with initial values, validation schema, and onSubmit function for handling form submission. It adds a todo item with specific userId, title, and completion status, logs the form values to the console, and resets the form after submission.

  const formik = useFormik({
    initialValues: {
      userId: "",
      title: "",
      completed: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addTodo({
        userId: "1",
        title: values.title,
        completed: false,
      });
      // alert(JSON.stringify(values, null, 2));
      console.log("🚀 ~ file: todosForm.jsx:28 ~ TodosFrom ~ values:", values);
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ mb: "20px" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ mb: "20px" }}
          variant="standard"
          fullWidth
          id="title"
          name="title"
          label="Enter a new todo item"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TodosFrom;
