import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");
<<<<<<< HEAD

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
=======
    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}
<<<<<<< HEAD

export default DarkOrLight;
=======
export default DarkOrLight;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
