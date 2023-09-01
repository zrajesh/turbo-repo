import { Header } from "ui";
import TodoList from "ui/components/todo_list";
import { serverClient } from "./_trpc/server_client";

export default async function Page(): Promise<JSX.Element> {

  const todos = await serverClient.myTodos.allTodos();
  return (
    <>
      <Header text="Web" />
      <TodoList Alltodos={todos} />
    </>
  );
}
