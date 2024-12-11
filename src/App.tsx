import React from 'react';
import './App.css';
import styled from 'styled-components';


import {Photo} from "./components/photo/Photo";
import {StyledBtn} from "./components/buttons/StyledBtn";
import {Heading} from "./components/heading/Heading";
import {Text} from "./components/text/Text";


function App() {
    return (
        <div>
            <Card>
                <Photo/>

                <Heading/>
                <Text/>
                <StyledBtn/>

            </Card>


        </div>

    );
}

export default App;

const Card = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    Width: 300px;
    Height: 350px;
    background-color: snow;
    //background-color: #FFFFFF;
    border-radius: 15px;
`












