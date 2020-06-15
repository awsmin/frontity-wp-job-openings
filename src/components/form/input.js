import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const Input = ( { state, actions, inputProps } ) => {
    const jobId = useContext(FormIdContext);
    const inputName = inputProps.name;

    if (typeof state.awsmjobs.forms[ jobId ].values[ inputName ] === 'undefined') {
        let initialValue = inputProps.value;
        if ( inputProps.type === 'checkbox' ) {
            initialValue = '';
        }
        actions.awsmjobs.setFieldValue( jobId, inputName, initialValue );
    }

    const onChangeHandler = (e) => {
        actions.awsmjobs.setFieldValue( jobId, inputName, e.target.value );
    };

    let value = state.awsmjobs.forms[ jobId ].values[ inputName ];
    if ( inputProps.type === 'checkbox' && value === '' ) {
        value = inputProps.value;
    }

    return (
        <input
            type={ inputProps.type }
            name={ inputProps.name }
            className={ inputProps.className }
            id={ inputProps.id }
            value={ value }
            aria-required={ inputProps.ariaRequired }
            onChange={ onChangeHandler }
        />
    );
};

export default connect(Input);