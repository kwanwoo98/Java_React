import React from "react";
import Student from "./Student";

function StudentList(props){
    return (
        <div>
            <Student sno={1} name="홍기동" major="경영학"/>
            <Student sno={2} name="박성언" major="컴퓨터공학"/>
            <Student sno={3} name="유다인" major="멀티"/>
        </div> 
    );
}

export default StudentList;