import React, {ReactNode} from 'react';
import styled, {css} from "styled-components";

function BtnStyle(props: { btn: string, children: ReactNode }) {
    return null;
}

export const StyledBtn = () => {
    // @ts-ignore
    return (
        <div>
            <BtnType btn={'primary'} color={'#FFFFFF'}>See more</BtnType>
            <BtnType btn={'second'}>Save</BtnType>
        </div>
    );
};

type BtnTypePropsType = {
    btn: 'primary' | 'second';
    color?: string;
}
const BtnType = styled.button<BtnTypePropsType>`
    margin: 19px 12px 22px 20px;
    border-radius: 5px;
    Width: 86px;
    Height: 30px;
    font-weight: 700;
    Font-Size: 10px;
    Line-height: 20px;
    Font-family: Inter;


    ${props => props.btn === 'primary' && css<BtnTypePropsType>`
        border: none;
        background-color: #4E71FE;
        color: ${props => props.color || '#FFFFFF'};


    `}
    ${props => props.btn === 'second' && css<BtnTypePropsType>`
        margin: 19px 96px 22px 0;
        border: 2px solid ${props => props.color || '#4E71FE'};
        background-color: #FFFFFF;
        color: ${props => props.color || '#4E71FE'};


    `}

`

