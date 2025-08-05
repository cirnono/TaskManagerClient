"use client";

import { todos } from "@/utils/todos";
import { useMemo, useState } from "react";
// import { CloseProjectDialog } from "./components/CloseProjectDialog";
// import { ProjectTabs } from "./components/ProjectTabs";
// import { DeleteProjectDialog } from "./components/DeleteProjectDialog";
// import { ReopenProjectDialog } from "./components/ReopenProjectDialog";
import { toast } from "sonner";

export const Todos = ({ initialTodos }: { initialTodos: ITodo[] }) => {
  return <div>{initialTodos.toString()}</div>;

  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  //   const [availableTodos, setAvailableTodos] = useState(initialTodos);
  //   const [todoToClose, setTodoToClose] = useState<string | null>(null);
  //   const [todoToDelete, setTodoToDelete] = useState<ITodo | null>(null);
  //   const [todoToReopen, setTodoToReopen] = useState<string | null>(null);

  //   const filteredProjects = useMemo(() => {
  //     return availableTodos
  //       .filter((todo) => {
  //         const searchLower = searchTerm.toLowerCase();
  //         return todo.content.toLowerCase().includes(searchLower);
  //         //|| todo.note.toLowerCase().includes(searchLower)
  //       })
  //       .sort((a, b) => {
  //         const dateA = new Date(a.createdAt).getTime();
  //         const dateB = new Date(b.createdAt).getTime();
  //         return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  //       });
  //   }, [availableTodos, searchTerm, sortOrder]);

  //   const activeProjects = filteredProjects.filter((p) => !p.completed);
  //   const closedProjects = filteredProjects.filter((p) => p.completed);

  //   const handleSort = (order: "newest" | "oldest") => {
  //     setSortOrder(order);
  //   };

  //   const handleCloseProject = async () => {
  //     if (!todoToClose) return;

  //     try {
  //       await todos.closeTodo(todoToClose);
  //       setAvailableTodos((prev) =>
  //         prev.map((todo) =>
  //           todo.id === todoToClose ? { ...todo, closed: true } : todo
  //         )
  //       );
  //       toast.success("Success", {
  //         description: "Project closed successfully",
  //       });
  //     } catch (error) {
  //       toast.error("Error", {
  //         description: "Failed to close project. Please try again.",
  //       });
  //     } finally {
  //       setTodoToClose(null);
  //     }
  //   };

  //   const handleReopenProject = async () => {
  //     if (!todoToReopen) return;
  //     try {
  //       await todos.reopenTodo(todoToReopen);
  //       setAvailableTodos((prev) =>
  //         prev.map((todo) =>
  //           todo.id === todoToReopen ? { ...todo, closed: false } : todo
  //         )
  //       );
  //       toast.success("Success", {
  //         description: "Project reopened successfully",
  //       });
  //     } catch (error) {
  //       toast.error("Error", {
  //         description: "Failed to reopen project. Please try again.",
  //       });
  //     } finally {
  //       setTodoToReopen(null);
  //     }
  //   };

  //   const handleDeleteProject = async () => {
  //     if (!todoToDelete) return;
  //     try {
  //       await todos.deleteTodo(todoToDelete.id);
  //       setAvailableTodos((prev) =>
  //         prev.filter((todo) => todo.id !== todoToDelete.id)
  //       );
  //       toast.success("Success", { description: "Project deleted successfully" });
  //     } catch (error) {
  //       toast.error("Error", {
  //         description: "Failed to delete project",
  //       });
  //     } finally {
  //       setTodoToDelete(null);
  //     }
  //   };

  //   return (
  //     // <div>
  //     //   <ProjectTabs
  //     //     activeProjects={activeProjects}
  //     //     closedProjects={closedProjects}
  //     //     allProjects={filteredProjects}
  //     //     searchTerm={searchTerm}
  //     //     setSearchTerm={setSearchTerm}
  //     //     sortOrder={sortOrder}
  //     //     onSort={handleSort}
  //     //     setProjectToClose={setProjectToClose}
  //     //     setProjectToReopen={setProjectToReopen}
  //     //     setProjectToDelete={setProjectToDelete}
  //     //   />

  //     //   <CloseProjectDialog
  //     //     open={!!projectToClose}
  //     //     onOpenChange={() => setProjectToClose(null)}
  //     //     onConfirm={handleCloseProject}
  //     //   />

  //     //   {projectToDelete && (
  //     //     <DeleteProjectDialog
  //     //       open={!!projectToDelete}
  //     //       onOpenChange={() => setProjectToDelete(null)}
  //     //       onConfirm={handleDeleteProject}
  //     //       projectName={projectToDelete.name}
  //     //     />
  //     //   )}

  //     //   <ReopenProjectDialog
  //     //     open={!!projectToReopen}
  //     //     onOpenChange={() => setProjectToReopen(null)}
  //     //     onConfirm={handleReopenProject}
  //     //   />
  //     // </div>
  //   );
};
