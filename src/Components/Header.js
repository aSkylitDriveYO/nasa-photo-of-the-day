import React from 'react';
import Image from './Image'
import styled from 'styled-components'

export default function Header(props) {
    const { data } = props;
    //console.log(props, 'props')
    //console.log(data.title,'data');
    return (
        <Container>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <Image data={data} img = {data.url}/>
        </Container>
    )
}

const Container = styled.div`
    background-color: red;
    display:flex;
    justify-content:space-around;
    flex-direction:column;

`