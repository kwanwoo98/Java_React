import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box; 
    padding-bottom: 3rem; 
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem; 
        padding-right: 1em;
    }
`;

// const sapleArticle = {
//     title:"제목",
//     description:"내용",
//     url :"https://google.com",
//     urlToImage: "https://via.placeholder.com/106",
// }

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query=category==='all' ? '' : `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=92d0e15d378b42cdb4fdd1b504554569`)
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    if(loading){
        return <NewsListBlock>로딩 중...</NewsListBlock>
    }
    if(!articles){
        console.log("aaaa")
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
            
        </NewsListBlock>
    );
};

export default NewsList;