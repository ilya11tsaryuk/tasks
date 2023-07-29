import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "./types";

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as TodoState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        action: action.payload,
        completed: false,
      };
      return [newTask,...state];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    completeTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.completed = true;
      }
    },
    unCompleteTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.completed = false;
      }
    },
    getAllTasks: (state) => state,
  },
});

export const { addTask, removeTask, getAllTasks, completeTask, unCompleteTask } =
  todoSlice.actions;
export const selectAllTasks = (state: { todo: TodoState }) => state.todo;
export default todoSlice;
