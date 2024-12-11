import React from 'react';
import styled from "styled-components";

export const Heading = () => {
    return (
        <div>
            <StyledH1>Headline</StyledH1>
        </div>
    );
};

const StyledH1 = styled.h1`
    margin: 20px 200px 0 20px;
    Width: 70px;
    Height: 19px;
    font-weight: 700;
    Font-Size: 16px;
    Line-height: 19px;
    Font-family: Inter;
    `