import React from 'react';

export default function Text(props) {
    const {text} = props
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}