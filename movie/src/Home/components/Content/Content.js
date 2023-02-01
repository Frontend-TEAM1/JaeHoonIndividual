import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/Common";
import { dummy } from "../../../moiveDummy";
import Moive from "../../../components/Movie";
import Date from "../../../components/Date";


function Content(){
    return(
        <S.Wrapper>
            <S.Section1>
                <Date 
                minimum={min}
                maximum={max}
                />
                
            
            </S.Section1>
            <S.Section2>
               
            </S.Section2>
            <S.Section3>
                {dummy.results.map((item)=>{
                    return(
                        <Moive 
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        release_date={item.release_date}
                        />);
                    
                })}
            </S.Section3>
        </S.Wrapper>
    )
}
export default Content;

const min=dummy.dates.minimum;
const max=dummy.dates.maximum;


const Wrapper=styled.div`

`

const Section1=styled.div`
width: 30%;
height: 10vh;
background-color: white;
color: black;
${flexCenter}



`
const Section2=styled.div`
width: 100%;
height: 5vh;
background-color: white;
color: black;
${flexAlignCenter}
${flexCenter}
margin: 0 ;
justify-content: space-evenly;

div{
    width: 15%;
    height: 4vh;
    ${flexCenter}
    
    cursor: pointer;
    border: 1px solid black;
    border-radius: 30px;
    
    transition: all 0.4s;
    

    :hover{
        background-color: black;
        color: white;

    }
}

`
const Section3=styled.div`
width: 100%;
${flexAlignCenter}
flex-wrap: wrap;
${flexCenter}

`

const S={
    Wrapper,
    Section1,
    Section2,
    Section3,
};