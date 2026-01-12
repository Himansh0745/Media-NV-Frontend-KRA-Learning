import { useMemo } from "react";
import type { Todo } from "../types/todo.types";

export function useTodoStats(todos: Todo[]) {
  return useMemo(() => {
    const completed = todos.filter(t => t.completed).length;
    return {
      total: todos.length,
      completed,
      pending: todos.length - completed
    }
  }, [todos]);
}