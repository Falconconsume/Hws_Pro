import React from "react";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import "../../index";

const TodoForm = ({ addTodo }) => {
  const SignupSchema = Yup.object().shape({
    todo: Yup.string()
      .min(10, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ todo: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        if (!values.todo.trim()) return;
        addTodo({ id: Date.now(), text: values.todo, completed: false });
        values.todo = "";
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <Field
            as={TextField}
            name="todo"
            label="Todo"
            value={values.todo}
            onChange={handleChange}
          />
          {errors.todo && touched.todo ? <div>{errors.todo}</div> : null}
          <Button type="submit">Add Todo</Button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
