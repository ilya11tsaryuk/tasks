import React, { ChangeEvent, useEffect, useState } from "react";
import SelectFilter from "./SelectFilter";
import TodoList from "./TodoList";
import InputForAdd from "./InputForAdd";
import { useSelector } from "react-redux";
import { getTheme } from "../Redux/themeSlice";
import { selectAllTasks } from "../Redux/todoSlice";
import { TodoState } from "../Redux/types";
import ThemeButton from "./ThemeButton";

const Container = () => {
    const isDarkTheme = useSelector(getTheme)
    const tasks = useSelector(selectAllTasks)
    const [filter, setFilter] = useState<string>("all");
    const [filteredTasks, setFilteredTasks] = useState<TodoState>(tasks);

    const sortTasks = (tasks: TodoState) => {
        return tasks.slice().sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    };

    useEffect(() => {
        let filtered
        if (filter === "all") {
            filtered = tasks;
        } else if (filter === "true") {
            filtered = tasks.filter((task) => task.completed === true);
        } else if (filter === "false") {
            filtered = tasks.filter((task) => task.completed === false);
        }
        const filterTasks = sortTasks(filtered || [])
        setFilteredTasks(filterTasks);
    }, [filter, tasks]);

    const filterTodo = (event: ChangeEvent<HTMLSelectElement>): void => {
        setFilter(event.target.value);
    };

    return (
        <div className={`w-full md:w-4/5 lg:w-3.5 m-auto`}>
            <div className={`${isDarkTheme ? "bg-darkPrimary" : "bg-lightPrimary"}`}>
                <div className={`flex justify-between items-center  pt-10 px-5 pb-5`}>
                    <div className={`w-2/5 text-start pl-2 text-2xl font-bold ${isDarkTheme ? "text-darkSecondary" : "text-lightSecondary"}`}>Todo List</div>
                    <div className={`flex justify-around w-1/2`}>
                        <SelectFilter defaultVal={filter} filterTodo={filterTodo} />
                        <ThemeButton />
                    </div>
                </div>
                <InputForAdd />
            </div>
            <TodoList todos={filteredTasks} />
        </div>
    )
}

export default Container