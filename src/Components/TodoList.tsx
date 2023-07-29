import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../Redux/themeSlice";
import TodoItem from "./TodoItem";
import { TodoListProps } from "../types";



const TodoList: React.FC<TodoListProps> = ({todos}) => {
    const isDarkTheme = useSelector(getTheme)
    return (
        <ul className={`w-11/12 mt-7 mx-auto`}>
            {todos.map((todo) => (
                <TodoItem id={todo.id} action={todo.action} completed={todo.completed} />
            ))}
        </ul>
    )
}

export default TodoList