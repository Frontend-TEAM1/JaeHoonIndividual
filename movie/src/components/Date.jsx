import React from "react";
import styled from "styled-components";
import { flexCenter } from "../styles/Common";
import { flexAlignCenter } from "../styles/Common";

function Date({minimum,maximum}){
    return(
        <div>
            {minimum} ~ {maximum}
        </div>
    )



}

export default Date;
