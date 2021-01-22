import React from 'react';
import styled from 'styled-components';

export default function Text(props) {
    const {text} = props
    return (
        <TextBox>
            <p>{text}</p>
        </TextBox>
    )
}
const TextBox = styled.div`
    background-color:red;
    border: 2px solid green;
    margin-left: 25%;
    margin-right:25%;
    padding: 1rem;
`