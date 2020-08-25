import React from 'react';

const validation = (props) => {
    let validationMessage = "Text too long";

    if (props.inputLength <= 5 ){
        validationMessage = "Text too short";
    }
    return (
        <div>
            <p>{validationMessage}</p>
            {/* {
                props.inputLength > 5 ?
                    <p>Tekst wystarczająco długi</p> :
                    <p>Tesk za krótki!</p>
            } */}
        </div>
    );
}

export default validation;