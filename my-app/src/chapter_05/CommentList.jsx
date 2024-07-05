import React from "react";
import Comment from "./Comment";

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

function CommentList(props){
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
            <Comment name={"대재학"} comment={"언제나오나요? 다음주"} />
            <Comment name={"빛강선"} comment={"놀랍게도 시즌 1의 금강선은.."} />
        </div>
    );
}
export default CommentList;