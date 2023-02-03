"use client";
import { border, Box, Button, Flex, Input } from "@chakra-ui/react";
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
      <Box
        maxW="450px"
        mt="30px"
        mx={{ base: "20px", lg: "auto" }}
        borderRadius="12px"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={{ base: "column", md: "column", lg: "row" }}>
          <Input
            type="text"
            style={{ border: "1px solid black" }}
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button onClick={addTodo}>Add</Button>
        </Flex>

        <ul
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            listStyle: "none",
          }}
        >
          {todos.map((todo) => {
            return (
              <li
                key={todo.text}
                style={{
                  marginLeft: "10px",
                  marginBottom: "7px",
                }}
              >
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
                    marginLeft: "10px",
                  }}
                >
                  {todo.text}
                </b>

                <Button
                  ml="5"
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
      </Box>
    </>
  );
}
