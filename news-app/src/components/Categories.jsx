import React from "react";
<<<<<<< HEAD
import styled ,{css} from 'styled-components';

const categories = [
    {name: 'all', text: '전체보기'},
    {name: 'business', text: '비즈니스'},
    {name: 'entertainment', text: '엔터테인먼트'},
    {name: 'health', text: '건강'},
    {name: 'science', text: '과학'},
    {name: 'sports', text: '스포츠'},
    {name: 'technology', text: '기술'},
];

const CategoriesBlock = styled.div`
    display : flex;
    padding : 1rem;
    width : 768px;
    margin : 0 auto;
    @media screen and (max-width: 768px) {
        width : 100% ;
        overflow-x : auto;
        }
    `;

const Category = styled.div`
    font-size : 1.125rem;
    cursor : pointer;
    white-space : pre;
    text-decoration : none;
    color : inherit;
    padding-bottom : 0.25rem;
    
    &:hover{
    color : #495057;
    }
    
    ${props =>
        props.active && css`
        font-weight : 600;
        border-bottom : 2px solid #22b8cf;
        color : #22b8cf;
        &.hover {
        color : #3bc9ab;
        }
        ` }
    
    & + & {
        margin-left : 1rem;
        }
    `;

    const Categories = ({onSelect, category}) => {
        return (
            <CategoriesBlock>
                {categories.map((c) => (
                    <Category key = {c.name} active={category === c.name} onClick={()=>onSelect(c.name)}>{c.text}</Category>
                ))}
            </CategoriesBlock>
        );
    };

=======
import styled, { css } from "styled-components";

const categories = [
    { name: 'all', text: '전체보기', },
    { name: 'business', text: '비즈니스', },
    { name: 'entertainment', text: '엔터테인먼트', },
    { name: 'health', text: '건강', },
    { name: 'science', text: '과학', },
    { name: 'sports', text: '스포츠', },
    { name: 'technology', text: '기술', },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;
&:hover {
    color: #495057;
}
${props =>
        props.active && css`
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
        color: #3bc9db;
    }
`}
& +&{
    margin-left: 1em;
}
`;

const Categories = ({ onSelect, cateogry }) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category key={c.name} active={cateogry === c.name}
                    onClick={() => onSelect(c.name)}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
export default Categories;