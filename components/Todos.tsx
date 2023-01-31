

// const getTodoList = async () => {
//   let todos = await fetch("http://jsonplaceholder.typicode.com/todos?userId=1");
//   return todos.json();
// }

import { Text } from "@chakra-ui/react";


export default async function TodoList() {
  // const { todos } = await getTodoList();
  // console.log(todos);

  return (
    <div>
      <Text>Todo App</Text>
    </div>
  )
} 