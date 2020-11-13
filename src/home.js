import React from 'react';
import styled from "styled-components"
import './App.css';

const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    padding: 10px 0px;
`



const HomePage = props => {
    return(
<Row>
<h1>Juan's Hot n Ready Pizza</h1>
</Row>
    )
}

export default HomePage;