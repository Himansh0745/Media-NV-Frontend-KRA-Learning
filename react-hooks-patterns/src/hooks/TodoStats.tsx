import type { Todo } from "../types/todo.types";
import { useTodoStats } from "./useTodoStats.ts";

type Props = {
  todos: Todo[];
};

export function TodoStats({ todos }: Props) {
  const { total, completed, pending } = useTodoStats(todos);

  return (
    <div className="stats-container">
      <div className="stat-card total">
        <div className="stat-label">Total</div>
        <div className="stat-value">{total}</div>
      </div>
      <div className="stat-card completed">
        <div className="stat-label">Done</div>
        <div className="stat-value">{completed}</div>
      </div>
      <div className="stat-card pending">
        <div className="stat-label">Pending</div>
        <div className="stat-value">{pending}</div>
      </div>
    </div>
  );
}
