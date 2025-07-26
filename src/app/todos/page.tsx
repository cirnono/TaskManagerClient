import { Todos } from "./Todos";

export default async function ProjectsPage() {
  const userProjects = await getTodos();

  return (
    <div className="w-[90%] flex flex-col md:flex-row mx-auto p-8 gap-4">
      <div className="flex-1">
        <Todos initialProjects={userProjects} />
      </div>
    </div>
  );
}
