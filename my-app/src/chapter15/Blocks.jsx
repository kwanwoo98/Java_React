<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
<<<<<<< HEAD
    flex-direction: row;
=======
    flex-direction: column;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;
<<<<<<< HEAD
=======
// flex-direction: row;
// align-items: flex-start;
// align-items: baseline;
// align-item : stretch;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
<<<<<<< HEAD
=======
    flex-duection : column;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block
<<<<<<< HEAD
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
=======
                        padding={blockItem.padding} 
                        backgroundColor={blockItem.backgroundColor}>
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;