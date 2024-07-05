<<<<<<< HEAD
import React, { useState } from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    )

}

// function SplitPane(props){
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">{props.left}</div>
//             <div className="SplitPane-right">{props.right}</div>
//         </div>
//     );
// }

// function App(props){
//     return (
//         <SplitPane left={<Contacts />}
//         right={<Chat />} />
//     );
// }

// function SignUpDialog(props){
//     const [nickname, setNickname] = useState('');
//     const handleChange = (event) => {
//         setNickname(event.target.value);
//     }
//     const handleSignup = () => {
//         alert( `${nickname}님 하이`);
//     }

//     return (
//         <Dialog
//         title ="프로그램 이름" message = "닉네임 입력하기">
//             <input value={nickname} onChange={handleChange}/>
//             <button onClick={handleSignup}>가입하기</button>
//         </Dialog>
//     )
// }

function WelcomeDialog(props){
    return (
        <div>
        <Dialog title="어서오세요" message="안반갑지롱"/>        
        <Dialog title="어서올거임?" message="나가렴"/> 
        </div>
    );
}

=======
import React from "react";
import FancyBorder from "./FancyBorder";
import Dialog
 from "./Dialog";
function WelcomeDialog(props){
    return(
        <Dialog title="어서 오세요" message="우리 사이트에 방문하신 것을 환영합니다."/>
        // <FancyBorder color="blue">
        //     <h1 className="Dialog-title">
        //         어서오세요
        //     </h1>
        //     <p className="Dialog-message">
        //         우리 사이트에 방문하신 것을 환영합니다.
        //     </p>
        // </FancyBorder>
    )
}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default WelcomeDialog;