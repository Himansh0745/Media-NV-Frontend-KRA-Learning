import { memo } from "react";
import type { Todo } from "../types/todo.types";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItemComponent({ todo, onToggle, onDelete }: Props) {
  console.log("Rendering:", todo.text);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div 
        className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
      />
      <span className="todo-text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button 
        className="delete-button" 
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
}

export const TodoItem = memo(TodoItemComponent);
