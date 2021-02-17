import React from 'react';
import Text from './Text';

export default function Vidoe(props) {
    const { img, data } = props
    return (
        <div>
            <img src={ img } alt=''/>
            <Text text={data.explanation} />
        </div>
    )
}

