import React from "react";
import Comment from "./Comment";
import Board from "./Board";

function Avatar(props){
    return(
        <img className="avatar" 
            src={props.author.avatarUrl} 
            alt={props.author.name} 
        />
    );
}

function UserInfo(props){
    <div className="user-info">
    <Avatar user={props.author}/>
    <div className="user-info-name">
        {props.author.name}
    </div>
    </div>
}

function BoardList(props){
    return(
        // <div className="comment">
        //    <UserInfo user={props.author}/>     
        //     <div className="comment-text">
        //         {props.text}
        //     </div>
        //     <div className="comment-date">
        //         {formatDate(props.date)}
        //     </div>
        // </div>
        <div>
            <Board title={"현디렉터"} name={"대재학"} comment={"언제나오나요? 다음주"} date={new Date().toLocaleDateString()}/>
            <Board title={"전디렉터"} name={"빛강선"} comment={"놀랍게도 시즌 1의 금강선은.."} date={new Date().toLocaleDateString()} />
        </div>
    );
}
export default BoardList;