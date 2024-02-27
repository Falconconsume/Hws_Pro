import React from "react";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";

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
        addTodo(values.todo);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field as={TextField} name="todo" label="Todo" />
          {errors.todo && touched.todo ? <div>{errors.todo}</div> : null}
          <Button type="submit">Add Todo</Button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
