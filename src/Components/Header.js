import React from 'react';
import Image from './Image'

export default function Header(props) {
    const { data } = props;
    //console.log(props, 'props')
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <Image data={data} img = {data.url}/>
        </div>
    )
}