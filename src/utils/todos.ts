export const todos = {
  async getTodos() {
    try {
      const res = await fetch("http://localhost:3001/todos");
      console.log(res);
      const data = await res.json();
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return data as ITodo[];
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      return [];
    }
  },
  async getTodo(id: string) {},

  async createTodos(todos: Partial<ITodo>[]) {},

  async updateTodos(ids: string[], updatess: Partial<ITodo>[]) {},

  async closeTodo(id: string) {},

  async deleteTodo(id: string) {},

  async reopenTodo(id: string) {},
};
