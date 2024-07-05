<<<<<<< HEAD
import React from "react";

function Card(props) {
    const { title, backgroundColor, children } = props;

=======
function Card(props) {
    const { title, backgroundColor, children } = props;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
<<<<<<< HEAD

=======
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default Card;