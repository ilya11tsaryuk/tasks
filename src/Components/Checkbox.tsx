import React from "react";
import { CheckboxProps } from "../types";
import { BsCheck2Square } from "react-icons/bs"
import { CiViewTimeline } from "react-icons/ci"

const Checkbox: React.FC<CheckboxProps> = ({ completed, onCompleted }) => {
    return (
        <label className="p-2 pl-0 mr-1 flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                checked={completed}
                onChange={onCompleted}
                className={`appearance-none`}
            />
            {completed ?
                <BsCheck2Square className="text-green-500" /> : <CiViewTimeline className="text-red-500" />
            }
        </label>
    )
}

export default Checkbox