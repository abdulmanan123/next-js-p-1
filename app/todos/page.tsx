"use client";
import { border, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "Todo 1", completed: true },
    { text: "Todo 2", completed: false },
    { text: "Todo 3", completed: false },
    { text: "Todo 4", completed: false },
    { text: "Todo 5", completed: false },
  ]);

  const checkboxHandler = (el: any) => {
    const newTodos = todos.map((todo) => {
      if (el.text === todo.text) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const inputHandler = (el: any) => {
    const newTodos = todos.map((todo) => {
      if (el.text === todo.text) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo = () => {
    const newTodo = { text: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodo = (el: any) => {
    const newTodos = todos.filter((todo) => {
      if (el.text == todo.text) return false;

      return true;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <input
        type="text"
        style={{ border: "1px solid black" }}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button onClick={addTodo}>Add</Button>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.text}>
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={() => {
                  checkboxHandler(todo);
                }}
              />
              <b
                style={{
                  color: todo.completed ? "green" : "orange",
                  fontStyle: todo.completed ? "oblique" : "",
                }}
              >
                {" "}
                {todo.text}
              </b>

              <Button
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
