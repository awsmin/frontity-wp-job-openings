import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const Input = ( { state, actions, inputProps } ) => {
    const jobId = useContext(FormIdContext);
    const fileInput = React.useRef();

    const inputName = inputProps.name;
    const inputType = inputProps.type;
    const inputValue = inputProps.value;
    
    if (typeof state.awsmjobs.forms[ jobId ].values[ inputName ] === 'undefined') {
        let initialValue = inputValue;
        if ( inputType === 'checkbox' || inputType === 'radio' ) {
            initialValue = '';
        }
        actions.awsmjobs.setFieldValue( jobId, inputName, initialValue );
    }

    const onChangeHandler = (e) => {
        let currentValue = '';
        if ( inputType === 'file' ) {
            currentValue = e.target.files[0];
        } else {
            currentValue = e.target.value;
            if ( inputType === 'checkbox' || inputType === 'radio' ) {
                currentValue = e.target.checked ? currentValue : '';
            }
        }
        actions.awsmjobs.setFieldValue( jobId, inputName, currentValue );
    };

    let value = state.awsmjobs.forms[ jobId ].values[ inputName ];

    let componentProps = {
        type: inputType,
        name: inputName,
        className: inputProps.className,
        id: inputProps.id,
        'aria-required': inputProps.ariaRequired,
        onChange: onChangeHandler
    };
    if ( inputType === 'file' ) {
        componentProps.accept = inputProps.accept;
        componentProps.ref = fileInput;
    } else if( inputType === 'checkbox' || inputType === 'radio' ) {
        componentProps.value = inputValue;
        componentProps.checked = inputValue === value ? true : false;
    } else {
        componentProps.value = value;
    }

    return (
        <input { ...componentProps } />
    );
};

export default connect(Input);