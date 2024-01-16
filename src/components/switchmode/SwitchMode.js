import React from "react";
import "./SwitchMode.css";
import Moon from "./Moon";
import Sun from "./Sun";
import { useTheme } from "../../context/ThemeContext";

const SwitchMode = () => {
    const { mode, toggleMode } = useTheme();

    return (
        <div className={`switchmode ${mode}`} onClick={toggleMode}>
            <div className="switchmode-circle"></div>
            {mode === 'dark' ? <Moon className={`switchmode-moon ${mode}`} /> : <Sun className={`switchmode-sun ${mode}`} />}
        </div>
    );
};

export default SwitchMode;
