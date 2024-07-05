import React from "react";
<<<<<<< HEAD
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display : flex;
    .thumbnail{
        margin-right : 1rem;
        img {
            dispaly : block ;
            width : 160px ;
            height : 100px ;
            object-fit : cover;
            }
        }
    .contents{
        h2{
            margin : 0;
            a {
                color : black;
                }
            }
            p {
                margin : 0;
                line-height : 1.5 ;
                margin-top : 0.5rem;
                white-space : normal;
                }
            }
            & + & {
                margin-top : 3rem; 
                }
         `;

const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    return (
=======
import styled from 'styled-components'


const NewsItemBlock = styled.div`
    display: flex; 
    .thumbnail{
        margin-right: 1em;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents{
        h2{
            margin:0;
            a{
                color: black;
            }
        }
        P{
            margin:0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }   
    & + & {
        margin-top: 3rem;
    }
`;
const NewsItem=({article})=>{
    const {title, description, url, urlToImage}=article;
    return(
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
<<<<<<< HEAD
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
=======
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description}</p>

>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            </div>
        </NewsItemBlock>
    );
};
<<<<<<< HEAD

export default NewsItem;
         
=======
export default NewsItem;
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
