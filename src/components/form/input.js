import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const Input = ( { state, actions, inputProps } ) => {
    const jobId = useContext(FormIdContext);
    const fileInput = React.useRef();

    const inputName = inputProps.name;
    const inputType = inputProps.type;
    
    if (typeof state.awsmjobs.forms[ jobId ].values[ inputName ] === 'undefined') {
        let initialValue = inputProps.value;
        if ( inputType === 'checkbox' ) {
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
        }
        actions.awsmjobs.setFieldValue( jobId, inputName, currentValue );
    };

    let value = state.awsmjobs.forms[ jobId ].values[ inputName ];
    if ( inputType === 'checkbox' && value === '' ) {
        value = inputProps.value;
    }

    let componentProps = {
        type: inputType,
        name: inputName,
        className: inputProps.className,
        id: inputProps.id,
        'aria-required': inputProps.ariaRequired,
        onChange: onChangeHandler
    };
    if ( inputType === 'file' ) {
        componentProps.ref = fileInput;
    } else {
        componentProps.value = value;
    }

    return (
        <input { ...componentProps } />
    );
};

export default connect(Input);