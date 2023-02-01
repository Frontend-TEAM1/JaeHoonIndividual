import React from "react";
import { Link } from "react-router-dom";

import HeaderPage from "./components/Header/Header";
import FooterPage from "./components/Footer/Footer";
import ContentPage from "./components/Content/Content";

import styled from 'styled-components';
import { flexCenter } from "../styles/Common";

function HomePage(){
    return(
        <S.Wrapper>
        <S.Header>
            <HeaderPage/>
        </S.Header>

        <S.Content>
            <ContentPage/>
        </S.Content>

        <S.Footer>
            <FooterPage/>
        </S.Footer>

        </S.Wrapper>
    );
}

export default HomePage; 

const Wrapper=styled.div`
${flexCenter}
flex-direction: column;

`

const Header=styled.div`
width: 80%;
height: 15vh;
background-color: black;
color: white;
${flexCenter}
flex-direction: column;

`
const Content=styled.div`
width: 100%;
height: 100%;
background-color: darkgray;
color: white;

`
const Footer=styled.footer`
width: 70%;
height: 15vh;
background-color: blueviolet;
color: black;
${flexCenter}

`

const S={
    Wrapper,
    Content,
    Header,
    Footer,
};