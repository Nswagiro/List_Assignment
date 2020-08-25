import React from 'react';

const component = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.value}/>
            <p>{props.value.length}</p>
        </div>
    )
};

export default component;