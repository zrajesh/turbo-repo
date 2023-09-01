"use client";
import { trpc } from "../../../apps/web/app/_trpc/client";
import { serverClient } from "../../../apps/web/app/_trpc/server_client";
import { useRecoilValue } from "recoil";
import { todoDetails } from "../../store/src/selectors/todo";

export default function TodoList({Alltodos}: {Alltodos: Awaited<ReturnType<(typeof serverClient.myTodos)["allTodos"]>>}): JSX.Element {
  const getTodos = trpc.getTodos.useQuery();
  const recoilData = useRecoilValue(todoDetails);  

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {getTodos?.data?.map((todo, index) => (
          <div key={index} className="flex gap-3 items-center">
            <label >{todo}</label>
          </div>
        ))}
        {Alltodos.map(todo => (<p key={todo.id}>{todo.text}</p>))}
        <p>Recoil state: {recoilData}</p>
      </div>
    </div>
  );
}