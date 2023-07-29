import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/todoSlice";
import {MdOutlineAddCircleOutline} from 'react-icons/md'

const InputForAdd = () => {
    const [value, setValue] = useState<string>("");
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (
        event: KeyboardEvent<HTMLInputElement>
      ): void => {
        if (event.key === "Enter") {
          handleAddTodo();
        }
      };

    const handleAddTodo = () => {
        if (value.length === 0) {
            return
        } else {
            dispatch(addTask(value));
            setValue("");
        }
    };
    return (
        <div className={`w-full px-5 pb-7 flex justify-around`}>
            <input
            className={`w-11/12 p-1 rounded-lg outline-none`}
                onKeyDown={handleKeyDown}
                value={value}
                onChange={handleChange}
            />
            <button className={`text-lightPrimary`} onClick={handleAddTodo}>
            <MdOutlineAddCircleOutline size={22} className="text-lightSecondary" />
            </button>
        </div>
    );
};

export default InputForAdd;