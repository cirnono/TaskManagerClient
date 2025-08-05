import { Todos } from "./Todos";
import { todos } from "@/utils/todos";

export default async function ProjectsPage() {
  const userTodos = await todos.getTodos();

  return (
    <div className="w-[90%] flex flex-col md:flex-row mx-auto p-8 gap-4">
      <div className="flex-1">
        <div>todo</div>
        {/* <Todos initialTodos={userTodos} /> */}
      </div>
    </div>
  );
}
