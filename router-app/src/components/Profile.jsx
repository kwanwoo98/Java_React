import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const data = {
    sung: {
        name:"성춘향",
        description:"개발자"
    },
    hong: {
        name:"홍길동",
        description: "주인공"
    }
}

function Profile(props){
    const navigate = useNavigate();
    const {username} = useParams();
    const profile = data[username]

    if(!profile){
        return <di>존재하지 않는 사용자입니다</di>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <button onClick={() => navigate("/")}>뒤로가기</button>
        </div>
    );
}

export default Profile;