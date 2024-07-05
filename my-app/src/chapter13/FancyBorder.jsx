import React from "react";

function FancyBorder(props){
<<<<<<< HEAD

    return (
        // <div className={`FancyBorder FancyBorder-+${props.color}`}></div>
        <div className={'FancyBorder FancyBorder-' +props.color}>
            {props.children}
        </div>
    );
}


export default FancyBorder;
=======
    return(
        <div className={"FancyBorder-"+props.color}>
            {props.children}
        </div>
    )
}
export default FancyBorder;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
