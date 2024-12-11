import React from 'react';
import styled from "styled-components";
import photo from "./../../assets/images/desert.jpg";

export const Photo = () => {
    return (
        <div>
            <StyledImg src={photo} alt=''/>
        </div>
    );
};

const StyledImg = styled.img`
    margin: 10px 10px 0 10px;
    border: none;
    Width: 280px;
    Height: 170px;
    border-radius: 10px;
    background-color: yellow;
    object-fit: cover;
`