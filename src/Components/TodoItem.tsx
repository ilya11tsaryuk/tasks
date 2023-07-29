import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, removeTask, unCompleteTask } from "../Redux/todoSlice";
import { Task } from "../Redux/types";
import { TiDeleteOutline } from "react-icons/ti"
import { getTheme } from "../Redux/themeSlice";
import Checkbox from "./Checkbox";

const TodoItem: React.FC<Task> = ({ id, action, completed }) => {
    const isDarkTheme = useSelector(getTheme)
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(removeTask(id));
    };

    const onCompleted = () => {
        if (completed) {
            dispatch(unCompleteTask(id))
        } else {
            dispatch(completeTask(id));
        }
    };

    return (
        <li
            className={`flex my-4 p-3 rounded-lg ${isDarkTheme ? "bg-darkSecondary" : "bg-lightSecondary"} justify-between`}
            key={id} >

            <div className={`flex items-center`}>
                <Checkbox onCompleted={onCompleted} completed={completed} />
                <div className={`pl-2 border-l-2 ${completed ? "border-l-green-500 line-through" : "border-l-red-500"} ${isDarkTheme ? "text-lightSecondary" : "text-darkSecondary"}`}>
                    {action}
                </div>
            </div>

            <button onClick={onDelete} >
                <TiDeleteOutline className={`opacity-60 ${isDarkTheme ? "text-darkPrimary" : "text-lightPrimary"}`} />
            </button>

        </li>
    );
};

export default TodoItem;
