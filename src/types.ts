import { ChangeEvent } from "react"
import { boolean } from "yargs";

export type SelectFilterProps = {
    defaultVal: string
    filterTodo: (event: ChangeEvent<HTMLSelectElement>) => void
}

export type Todo = {
    id: number;
    action: string;
    completed: boolean 
  };

export type TodoListProps = {
  todos: Todo[]
}

export type CheckboxProps = {
  completed: boolean
  onCompleted: () => void
}