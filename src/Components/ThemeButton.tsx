import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../Redux/themeSlice";
import { BiSun } from "react-icons/bi";
import { MdNightsStay } from "react-icons/md";

const ThemeButton = () => {
    const isDarkTheme = useSelector(getTheme)
    const dispatch = useDispatch()
    const chengeTheme = () => {
        dispatch(toggleTheme());
    };
    return (
        
        < button onClick={ chengeTheme }>{
            isDarkTheme ? <BiSun size={22} className="text-darkSecondary" /> : <MdNightsStay size={22} className="text-lightSecondary" />
        }</button >
    )
}

export default ThemeButton