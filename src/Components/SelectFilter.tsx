import React from "react";
import { SelectFilterProps } from "../types";
import { useSelector } from "react-redux";
import { getTheme } from "../Redux/themeSlice";

const SelectFilter: React.FC<SelectFilterProps> = ({ filterTodo, defaultVal }) => {
    const isDarkTheme = useSelector(getTheme)
  return (
    <select
    className={`w-4/5 p-1 rounded-lg outline-none bg-white"`}
      defaultValue={defaultVal}
      onChange={filterTodo}
    >
      <option key={1} value={"all"}>
        Все
      </option>
      <option key={2} value={"true"}>
        Сделанные
      </option>
      <option key={3} value={"false"}>
        В процессе
      </option>
    </select>
  );
};

export default SelectFilter;
