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

    // console.log(isDarkTheme)

    useEffect(() => {
        if (filter === "all") {
            setFilteredTasks(tasks);
        } else if (filter === "true") {
            const filtered = tasks.filter((task) => task.completed === true);
            setFilteredTasks(filtered);
        } else if (filter === "false") {
            const filtered = tasks.filter((task) => task.completed === false);
            setFilteredTasks(filtered);
        }
    }, [filter, tasks]);

    const filterTodo = (event: ChangeEvent<HTMLSelectElement>): void => {
        setFilter(event.target.value);
    };

    return (
        <div className={`w-full md:w-4/5 lg:w-3.5 m-auto`}>
            <div className="bg-lightPrimary">
                <div className={`flex justify-between items-center  pt-10 px-5 pb-5`}>
                    <div className={`w-1/2 text-center text-md font-bold text-lightSecondary`}>Todo List</div>
                    <div className={`flex justify-around`}>
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