import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, toggleTheme } from './Redux/themeSlice';
import SelectFilter from './Components/SelectFilter';
import InputForAdd from './Components/InputForAdd';
import { getAllTasks, selectAllTasks } from './Redux/todoSlice';
import { TodoState } from './Redux/types';
import Container from './Components/Container';


function App() {
  const isDarkTheme = useSelector(getTheme)
  

  return (
    <div className={`h-screen ${isDarkTheme ? "bg-darkBackground" : "bg-lightBC"}`}>
     <Container />
    </div>
  );
}

export default App;
