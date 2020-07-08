import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const SubmitButton = ( { state, buttonProps } ) => {
    const jobId = useContext(FormIdContext);

    let value = buttonProps.value;
    if ( typeof state.awsmjobs.forms[ jobId ].submitting !== 'undefined' && state.awsmjobs.forms[ jobId ].submitting ) {
        value = 'Submitting..';
    }

    return (
        <input
            type={ buttonProps.type }
            name={ buttonProps.name }
            className={ buttonProps.className }
            id={ buttonProps.id }
            value={ value }
        />
    );
};

export default connect(SubmitButton);