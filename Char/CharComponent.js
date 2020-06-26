import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className="charComponent">
            <p onClick={props.click}>{props.charInput}</p>
        </div>
    )
};

export default CharComponent;