import React from 'react';
import styled from "styled-components";

export const Text = () => {
    return (
        <div>
            <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
        </div>
    );
};

const StyledText = styled.p`
    margin: 20px 20px 0 20px;
    Width: 260px;
    Height: 40px;
    Font-Size: 12px;
    font-weight: 500;
    Font-family: Inter;
`