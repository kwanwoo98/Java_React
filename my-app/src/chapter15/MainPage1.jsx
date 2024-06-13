import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-sizeL 1.5em;
    color: white;
    text-align: center;
`;

function MainPage1(props){
    return(
        <Wrapper>
            <Title>메인페이지1</Title>
        </Wrapper>
    );
}
export default MainPage1;