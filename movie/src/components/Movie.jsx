
import React from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/Common";
import { flexAlignCenter } from "../styles/Common";

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";



function Moive({title, poster_path, vote_average,release_date}){
    return(
        <div className='movie-container'>
            <img src={IMG_BASE_URL + poster_path} alt='영화 포스터'/>
            <S.VoteAverage>💖{vote_average}</S.VoteAverage>
            <S.Title>{title}</S.Title>
            <S.ReleaseDate>{release_date}</S.ReleaseDate>

        </div>
    )

}
export default Moive;

/*
   <h4>{title}</h4>
                <span>{vote_average}</span>
*/

const VoteAverage=styled.div`

    
`
const Title=styled.div`

    
`
const ReleaseDate=styled.div`

    
`
const S={
    VoteAverage,
    Title,
    ReleaseDate

}