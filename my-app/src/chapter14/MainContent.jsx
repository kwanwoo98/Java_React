import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
<<<<<<< HEAD

=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}
<<<<<<< HEAD

=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default MainContent;