import React from "react";
import { SelectFilterProps } from "../types";

const SelectFilter: React.FC<SelectFilterProps> = ({ filterTodo, defaultVal }) => {
  return (
    <select
    className={`w-4/5 p-1 rounded-lg outline-none`}
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
        Незаконченные
      </option>
    </select>
  );
};

export default SelectFilter;
