export const todos = {
    async getTodos() {},
    async getTodo(id: string) {},

    async createTodos(todos: Partial<ITodo>[]) {},

    async updateTodos(ids: string[], updatess: Partial<ITodo>[]) {},

    async closeTodo(id: string) {},

    async deleteTodo(id: string) {},

    async reopenTodo(id: string) {},
};
