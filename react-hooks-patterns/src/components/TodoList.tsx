import type { Todo } from "../types/todo.types";
import { TodoItem } from "./TodoItem.tsx";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  if (todos.length === 0) {
    return <div className="empty-state">No Todos Found</div>;
  }
  
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
}
