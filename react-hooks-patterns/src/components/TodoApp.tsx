import { useState, useEffect, useCallback } from "react";
import type { Todo } from "../types/todo.types";
import { TodoInput } from "./TodoInput.tsx";
import { TodoList } from "./TodoList.tsx";
import { TodoStats } from "../hooks/TodoStats.tsx";

export function TodoApp(){
    const [todos, setTodos] = useState<Todo[]>([]);

    //useEffect
    useEffect(() =>{
        console.log("Todos changed", todos);
    }, [todos]);


    //useCallback
    const addTodo = useCallback((text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false}
        ]);
    }, []);

    const toggleTodo = useCallback((id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                ? {...todo, completed: !todo.completed}
                : todo));
        }, []);

    const deleteTodo = useCallback((id: number) => {
        setTodos(prev =>
            prev.filter(todo => todo.id !== id));
    }, []);


    return (
        <div className="glass-container">
            <div className="app-header">
                <h1 className="app-title">
                    <span className="icon">✏️</span>
                    My Todo App
                </h1>
                <p className="app-subtitle">Productivity Dashboard</p>
            </div>

            <div className="input-section">
                <TodoInput onAdd={addTodo} />
            </div>

            <TodoStats todos={todos} />

            <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
            />
        </div>
    )
}