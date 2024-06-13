import React from "react";
import ThemeContext from "./ThemeContext";

function ThemeTest2(props){
    return(
        <div>
            <p>ThemeTest2</p>
            <ThemeContext.Consumer>
                {value=>value}
            </ThemeContext.Consumer>
        </div>
    )
}
export default ThemeTest2;